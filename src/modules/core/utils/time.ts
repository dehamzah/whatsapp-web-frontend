import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);

// todo: add the tests
export function toCalendarTime(isoDate: string) {
  return dayjs().calendar(dayjs(isoDate), {
    sameDay: "hh:mm",
    lastDay: "Yesterday",
  });
}
