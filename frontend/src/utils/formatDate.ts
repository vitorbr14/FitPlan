type FormatDateType = {
  date: string | undefined;
};

export const formatDate = (date: any) => {
  const zeroAesquerda = (numero: number) => {
    if (numero < 10) return `0${numero}`;
    return numero;
  };

  const getDay = zeroAesquerda(date.getDay());
  const getMonth = zeroAesquerda(date.getMonth());
  const getYear = date.getFullYear();
  return `${getDay}/${getMonth}/${getYear}`;
};
