"use strict";

import HostReservationRepository from "@app/Domain/HostReservationRepository";
import TwitchCommandExecuter from "@app/Domain/TwitchCommandExecuter";
import { inject, injectable } from "inversify";
import TYPES from "@app/types";
import SearchCriteria from "@app/Domain/SearchCriteria";
import HostReservation from "@app/Domain/HostReservation";

@injectable()
export default class AutoHosting {
  constructor(
    @inject(TYPES.HostReservationRepository) private hostReservationRepository: HostReservationRepository,
    @inject(TYPES.TwitchCommandExecuter) private twitchCommandExecutor: TwitchCommandExecuter,
  ) { }

  public async checkReservationAndHost(): Promise<void> {
    const hostReservation = await this.findHostReservationOrNull();

    if (!hostReservation) {
      await this.twitchCommandExecutor.unhost();
      return;
    }

    await this.twitchCommandExecutor.host(hostReservation.getStreamerAccountName());
  }

  private async findHostReservationOrNull(): Promise<HostReservation|null> {
    const searchCriteria = new SearchCriteria(new Date(Date.now()));
    const hostReservations = await this.hostReservationRepository.matched(searchCriteria);
    return hostReservations[0];
  }
}
