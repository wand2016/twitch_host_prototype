import TwitchCommandExecuterImpl from "@app/Infrastructure/TwitchCommandExecuterImpl";
import MyGlobal from "@tests/global";
import TYPES from "@app/types";

declare const global: MyGlobal;

test("host/OK", async (done) => {
  const twitchCommandExecuterImpl = global.container.get<TwitchCommandExecuterImpl>(TYPES.TwitchCommandExecuterImpl);

  await twitchCommandExecuterImpl.host("wand_ta");

  done();
});

test("unhost/OK", async (done) => {
  const twitchCommandExecuterImpl = global.container.get<TwitchCommandExecuterImpl>(TYPES.TwitchCommandExecuterImpl);

  await twitchCommandExecuterImpl.unhost();

  done();
});
