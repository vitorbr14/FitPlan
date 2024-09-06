import dayjs from "dayjs";

export const switchCasePlanos = (date: any, selectedOption: string) => {
  switch (selectedOption) {
    case "plano_1":
      return date && dayjs(date).add(5, "day").format("DD/MM/YYYY");

    case "plano_2":
      return date && dayjs(date).add(10, "day").format("DD/MM/YYYY");

    case "plano_3":
      return date && dayjs(date).add(15, "day").format("DD/MM/YYYY");

    default:
      // Valor padrão caso nenhum radio esteja selecionado
      return dayjs().format("DD/MM/YYYY");
  }
};
