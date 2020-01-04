"use strict";

export default interface TwitchCommandExecuter {
  host(streamerAccountName: string): Promise<void>;
  unhost(): Promise<void>;
}
