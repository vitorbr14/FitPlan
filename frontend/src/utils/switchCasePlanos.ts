import dayjs from "dayjs";

export const switchCasePlanos = (date: any, selectedOption: any) => {
  switch (selectedOption) {
    case "plano_1":
      return date && dayjs(date).add(1, "month").format("DD/MM/YYYY");

    case "plano_2":
      return date && dayjs(date).add(6, "months").format("DD/MM/YYYY");

    case "plano_3":
      return date && dayjs(date).add(1, "year").format("DD/MM/YYYY");
  }
};
