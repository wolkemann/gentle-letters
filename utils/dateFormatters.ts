import dayjs from "dayjs";
import { PENDING_REPLY_MAX_DAYS } from "./constants";

enum DateFormats {
  DDMMYYY = "DD-MM-YYYY",
}

export const getDateAsText = (date: string) => {
  return dayjs(date).format(DateFormats.DDMMYYY);
};

export const isReplyTimePassed = (letterDate: string) => {
  return dayjs().diff(letterDate, "day") > PENDING_REPLY_MAX_DAYS;
};
