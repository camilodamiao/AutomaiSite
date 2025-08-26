import express, { type Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Debug do ambiente
console.log("=== ENVIRONMENT CHECK ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("Current directory:", process.cwd());
console.log("Directory contents:", fs.readdirSync(process.cwd()));

// Verifica se dist/public existe
const buildPath = path.resolve(process.cwd(), "dist", "public");
if (fs.existsSync(buildPath)) {
  console.log("✅ Build found at:", buildPath);
  const files = fs.readdirSync(buildPath);
  console.log("Build contents (first 10):", files.slice(0, 10));
} else {
  console.log("❌ BUILD NOT FOUND at:", buildPath);
  console.log("Available directories:", fs.readdirSync(process.cwd()));
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    console.log("=== PRODUCTION MODE ===");
    console.log("Setting up static file serving...");
    serveStatic(app);
  }

  // Railway usa porta 8080 por padrão
  const port = parseInt(process.env.PORT || '8080', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
    console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
  });
})();
