describe("matchers", () => {
  test("tobe", () => {
    expect(4 + 4).toBe(8);
  });
  test("toEqual", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    const arr = [1, 2];
    expect(arr).toEqual([1, 2]);
  });
  test("not", () => {
    expect(true).not.toBe(false);
  });
  test("string", () => {
    expect("team").not.toMatch(/I/);
  });
  test("COMPILING ANDORID GOES AS EXPECT", () => {});
});
