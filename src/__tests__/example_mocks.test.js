import { storage } from "../lib/storage";
import { getUsername, saveUsername } from "../user";
jest.mock("../lib/storage");
test("firdt exmaple", () => {
  const myMock = jest.fn();
  myMock();
  expect(myMock).toHaveBeenCalled();
});
test("second exmaple", () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce("HELLO WORLD")
    .mockReturnValueOnce(5);
  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();

  expect(myMock).toHaveBeenCalledTimes(3);
  expect(result1).toBe(true);
  expect(result2).toBe("HELLO WORLD");
  expect(result3).toBe(5);
});

test("example save user name storage", () => {
  const username = "cristian";
  saveUsername(username);
  expect(storage.save).toHaveBeenCalledTimes(1);
  expect(storage.save).toHaveBeenCalledWith({
    key: "username",
    value: username,
  });
});

test("example get user name storage", () => {
  const username = "cristian";
  storage.save.mockReturnValueOnce(username);
  const result = getUsername();
  expect(result).toBe(username);
  expect(storage.get).toHaveBeenCalledTimes(1);
  expect(storage.get).toHaveBeenCalledWith({
    key: "username",
  });
});
