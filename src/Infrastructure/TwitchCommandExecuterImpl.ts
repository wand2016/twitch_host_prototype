"use strict";

import TwitchCommandExecuter from "@app/Domain/TwitchCommandExecuter";
import tmi from "tmi.js";

export default class TwitchCommandExecuterImpl implements TwitchCommandExecuter {

  /**
   * @readonly
   */
  private ircClient: tmi.Client;

  /**
   * @readonly
   */
  private systemAccountChannel: string;

  constructor(
    systemAccountName: string,
    oauthToken: string,
  ) {
    this.systemAccountChannel = systemAccountName;

    this.ircClient = tmi.Client({
      options: { debug: true },
      connection: {
        reconnect: true,
        secure: true,
      },
      identity: {
        username: systemAccountName,
        password: `oauth:${oauthToken}`,
      },
      channels: [this.systemAccountChannel],
    });
  }

  public async host(streamerAccountName: string): Promise<void> {
    await this.ircClient.connect();
    await this.ircClient.say(this.systemAccountChannel, `/host ${streamerAccountName}`);
    await this.sleepFor(1000);
    await this.ircClient.disconnect();
  }

  public async unhost(): Promise<void> {
    await this.ircClient.connect();
    await this.ircClient.say(this.systemAccountChannel, "/unhost");
    await this.sleepFor(1000);
    await this.ircClient.disconnect();
  }

  private async sleepFor(millisec: number) {
    await new Promise((r, _) => { setTimeout(r, millisec); });
  }
}
