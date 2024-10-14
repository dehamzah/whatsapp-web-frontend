import dayjs from "dayjs";
import { test, expect } from "vitest";
import { toCalendarTime } from "./time";

test("it can convert iso date to same day", () => {
  const input = dayjs().set("hour", 10).set("minute", 10).toISOString();
  const expected = "10:10";
  const output = toCalendarTime(input);

  expect(output).toEqual(expected);
});

test("it can covert iso date to yesterday", () => {
  const input = dayjs()
    .set("hour", 10)
    .set("minute", 10)
    .subtract(1, "day")
    .toISOString();
  const expected = "Yesterday";
  const output = toCalendarTime(input);

  expect(output).toEqual(expected);
});

test("it can convert iso date to some time ago", () => {
  const input = dayjs()
    .set("year", 2024)
    .set("month", 0)
    .set("date", 20)
    .toISOString();
  const expected = "20/01/2024";
  const output = toCalendarTime(input);

  expect(output).toEqual(expected);
});
