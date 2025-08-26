import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
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
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
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
  // CORREÇÃO: apontar para dist/public ao invés de apenas public
  let distPath = path.resolve(import.meta.dirname, "..", "dist", "public");

  console.log("=== STATIC FILE SERVER ===");
  console.log("Looking for build at:", distPath);
  console.log("Build exists?", fs.existsSync(distPath));
  
  if (!fs.existsSync(distPath)) {
    // Tenta caminho alternativo
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
  
  // Lista os arquivos encontrados para debug
  try {
    const files = fs.readdirSync(distPath);
    console.log("Files in build directory:", files.slice(0, 10));
  } catch (error) {
    console.error("Error reading build directory:", error);
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    console.log("Serving index.html from:", indexPath);
    res.sendFile(indexPath);
  });
}
