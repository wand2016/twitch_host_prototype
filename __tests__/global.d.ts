import Global = NodeJS.Global;
import { Container } from "inversify";

export default interface TestGlobal extends Global {
  container: Container
}
