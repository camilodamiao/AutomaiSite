import express, { type Express } from "express";
import fs from "fs";
import * as path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    configFile: path.resolve("vite.config.ts"),
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve("client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  let distPath = path.resolve("dist/public");

  console.log("=== STATIC FILE SERVER ===");
  console.log("Looking for build at:", distPath);
  console.log("Build exists?", fs.existsSync(distPath));
  
  if (!fs.existsSync(distPath)) {
    const alternativePath = path.resolve(process.cwd(), "dist", "public");
    console.log("Trying alternative path:", alternativePath);
    
    if (fs.existsSync(alternativePath)) {
      console.log("Found build at alternative path!");
      distPath = alternativePath;
    } else {
      throw new Error(
        `Could not find the build directory. Tried:\n` +
        `- ${distPath}\n` +
        `- ${alternativePath}\n` +
        `Please run 'npm run build' first`
      );
    }
  }

  console.log("Serving static files from:", distPath);
  
  try {
    const files = fs.readdirSync(distPath);
    console.log("Files in build directory:", files.slice(0, 10));
  } catch (error) {
    console.error("Error reading build directory:", error);
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    console.log("Serving index.html from:", indexPath);
    res.sendFile(indexPath);
  });
}
