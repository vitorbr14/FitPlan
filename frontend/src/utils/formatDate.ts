// As datas da API vem neste formato: 2024-11-07T03:00:00.000Z
// A função serve para trazer Para o formato DIA/MES/ANO

export const formatarData = (dataApi: string): string => {
  const separate = dataApi.split("T")[0];
  const separate2 = separate.split("-");
  const obj = { ...separate2 };

  const novaData = `${obj[2]}/${obj[1]}/${obj[0]}`;
  return novaData;
};
