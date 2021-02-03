import { server } from "./server.ts";

await server.run({
  hostname: "0.0.0.0",
  port: 8099
});

console.log(`Bedrock server listening: http://${server.hostname}:${server.port}`);
