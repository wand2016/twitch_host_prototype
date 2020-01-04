"use strict";

import HostReservation from "@app/Domain/HostReservation";
import SearchCriteria from "@app/Domain/SearchCriteria";

export default interface HostReservationRepository {
  matched(searchCriteria: SearchCriteria): Promise<HostReservation[]>;
}
