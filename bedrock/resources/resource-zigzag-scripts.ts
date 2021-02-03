import { Drash } from "../deps.ts";

const decoder = new TextDecoder();

export default class ZigzagScriptsResource extends Drash.Http.Resource {
  static paths = ["/zigzag/scripts/:script_name"];

  public async GET() {
    let fqfn;
    try {
      // Try to read the script file specified
      const scriptName = this.request.getPathParam("script_name");
      fqfn = `./zigzag/${scriptName}`;
      this.response.body = decoder.decode(Deno.readFileSync(fqfn));
      this.response.headers.set("Content-Type","application/javascript");
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error loading [${fqfn}].`
      );
    }
    return this.response;
  }
}
