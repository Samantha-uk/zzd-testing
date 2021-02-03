import { Drash } from "../deps.ts";
export default class ZigzagPanelResource extends Drash.Http.Resource {
  static paths = ["/zigzag-panel"];

  public async GET() {
    try {
      this.response.body = `
  <!DOCTYPE HTML>
  <html>
  <script type="module" src="/zigzag/scripts/zigzag-panel.esm.js"></script>
    <body>
      <custom-panel-zigzag></custom-panel-zigzag>
    </body>
  </html>
      `;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error loading Zigzag panel.`
      );
    }
    return this.response;
  }
}
