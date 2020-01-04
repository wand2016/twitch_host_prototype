import "reflect-metadata";

import { Container } from "inversify";
import TYPES from "@app/types";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";
import GoogleCalendarGatewayImpl from "@app/Infrastructure/GoogleCalendarGatewayImpl";
import TwitchCommandExecuter from "@app/Domain/TwitchCommandExecuter";
import TwitchCommandExecuterImpl from "@app/Infrastructure/TwitchCommandExecuterImpl";
import HostReservationRepository from "@app/Domain/HostReservationRepository";
import HostReservationRepositoryImpl from "@app/Infrastructure/HostReservationRepositoryImpl";
import HostReservationMapper from "@app/Mappers/HostReservationMapper";
import AutoHosting from "@app/Services/AutoHosting";

const container: Container = new Container();

container.bind<AutoHosting>(TYPES.AutoHosting).to(AutoHosting);

container.bind<HostReservationRepository>(TYPES.HostReservationRepository).toService(TYPES.HostReservationRepositoryImpl);
container.bind<HostReservationRepositoryImpl>(TYPES.HostReservationRepositoryImpl).to(HostReservationRepositoryImpl);

container.bind<GoogleCalendarGateway>(TYPES.GoogleCalendarGateway).toService(TYPES.GoogleCalendarGatewayImpl);
container.bind<GoogleCalendarGatewayImpl>(TYPES.GoogleCalendarGatewayImpl)
  .toConstantValue(
    new GoogleCalendarGatewayImpl(
      process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      process.env.GOOGLE_CALENDAR_PRIVATE_KEY,
      process.env.GOOGLE_CALENDAR_CALENDAR_ID,
    ),
  );

container.bind<TwitchCommandExecuter>(TYPES.TwitchCommandExecuter).toService(TYPES.TwitchCommandExecuterImpl);
container.bind<TwitchCommandExecuter>(TYPES.TwitchCommandExecuterImpl)
  .toConstantValue(
    new TwitchCommandExecuterImpl(
      process.env.TWITCH_USERNAME,
      process.env.TWITCH_TOKEN,
    ),
  );

container.bind<HostReservationMapper>(TYPES.HostReservationMapper).to(HostReservationMapper);


export default container;
