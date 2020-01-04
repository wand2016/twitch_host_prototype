import { entrypoint } from "@app/handler";

test('hoge', async (done) => {
  await entrypoint();

  done();
});
