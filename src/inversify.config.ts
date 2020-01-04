import "reflect-metadata";

import { Container } from "inversify";
import TYPES from "@app/types";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";
import GoogleCalendarGatewayImpl from "@app/Infrastructure/GoogleCalendarGatewayImpl";

const container: Container = new Container();

container.bind<GoogleCalendarGatewayImpl>(TYPES.GoogleCalendarGatewayImpl)
  .toConstantValue(
    new GoogleCalendarGatewayImpl(
      process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      process.env.GOOGLE_CALENDAR_PRIVATE_KEY,
      process.env.GOOGLE_CALENDAR_CALENDAR_ID,
    ),
  );

container.bind<GoogleCalendarGateway>(TYPES.GoogleCalendarGateway).to(GoogleCalendarGatewayImpl);

export default container;
