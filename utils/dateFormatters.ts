import dayjs from "dayjs";

enum DateFormats {
  DDMMYYY = "DD-MM-YYYY",
}

export const getDateAsText = (date: string) => {
  return dayjs(date).format(DateFormats.DDMMYYY);
};
