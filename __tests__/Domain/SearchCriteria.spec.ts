import SearchCriteria from "@app/Domain/SearchCriteria";

test("getDatetime/構築時に指定した値を得る", () => {
  const datetime = new Date("2020-01-01T00:00:00+09:00");

  const searchCriteria = new SearchCriteria(datetime);

  expect(searchCriteria.getDatetime()).toBe(datetime);
});
