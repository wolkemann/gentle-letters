import dayjs, { Dayjs } from "dayjs";
import { PENDING_REPLY_MAX_DAYS } from "./constants";

export enum DateFormats {
  DDMMYYY = "DD-MM-YYYY",
  TIMESTAMP = "YYYY-MM-DD HH:mm:ssZ",
}

export const getDateAsText = (
  date: string | Dayjs,
  format: DateFormats = DateFormats.DDMMYYY,
) => {
  return dayjs(date).format(format);
};

export const isReplyTimePassed = (letterDate: string) => {
  return dayjs().diff(letterDate, "day") > PENDING_REPLY_MAX_DAYS;
};
