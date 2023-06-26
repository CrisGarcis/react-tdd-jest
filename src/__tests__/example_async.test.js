//callbacks
const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

//promises
const asyncPromise = (cb) => new Promise((resolve) => resolve(true));
describe("async code", () => {
  test("example of async with callback", (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    });
  });
  test("example of async with async await", async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});
