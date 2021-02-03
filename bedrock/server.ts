import { Drash } from "./deps.ts";
import ZigzagPanelResource from "./resources/resource-zigzag-panel.ts";
import ZigzagScriptsResource from "./resources/resource-zigzag-scripts.ts";

export const server = new Drash.Http.Server({
  directory: Deno.realPathSync("."),
  response_output: "application/javascript",
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "debug",
  }),
  resources: [
    ZigzagPanelResource,
    ZigzagScriptsResource
  ],
});
