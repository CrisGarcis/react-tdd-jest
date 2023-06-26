describe("setup and teardown examples", () => {
  beforeAll(() => {
    console.log("beforeall");
  });
  beforeEach(() => {
    console.log("beforeeach");
  });
  afterAll(() => {
    console.log("afteraall");
  });
  afterEach(() => {
    console.log("aftereach");
  });
  test("example 1", () => {
    expect(true).toBe(true);
  });
  test("example 2", () => {
    expect(true).toBe(true);
  });
});
