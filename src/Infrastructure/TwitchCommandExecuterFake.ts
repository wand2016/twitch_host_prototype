"use strict";

import TwitchCommandExecuter from "@app/Domain/TwitchCommandExecuter";

export default class TwitchCommandExecuterFake implements TwitchCommandExecuter {

  public executedHost = false;
  public executedUnhost = false;

  public async host(_: string): Promise<void> {
    this.executedHost = true;
  }

  public async unhost(): Promise<void> {
    this.executedUnhost = true;
  }
}
