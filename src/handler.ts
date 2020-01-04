"use strict";

import container from "@app/inversify.config";
import AutoHosting from "@app/Services/AutoHosting";
import TYPES from "@app/types";

export const entrypoint = async () => {
  const autoHosting = container.get<AutoHosting>(TYPES.AutoHosting);

  await autoHosting.checkReservationAndHost();

  return {
    statusCode: 200,
  };
};
