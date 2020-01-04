"use strict";

import TwitchCommandExecuter from "@app/Domain/TwitchCommandExecuter";
import { injectable } from "inversify";

@injectable()
export default class TwitchCommandExecuterFake implements TwitchCommandExecuter {

  public executedHost = false;
  public executedUnhost = false;
  public hostedAccountName = "";

  public async host(streamerAccountName: string): Promise<void> {
    this.executedHost = true;
    this.hostedAccountName = streamerAccountName;
  }

  public async unhost(): Promise<void> {
    this.executedUnhost = true;
  }
}
