import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);

/**
 * It will convert to human readable calendar time given the param iso date string.
 */
export function toCalendarTime(isoDate: string) {
  return dayjs(isoDate).calendar(undefined, {
    sameDay: "hh:mm",
    lastDay: "[Yesterday]",
    sameElse: "DD/MM/YYYY",
  });
}
