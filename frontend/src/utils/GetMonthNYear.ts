// No componente AlunoPerfilFinanceiroRow, na parte de "referencia", eu quero exibir a data da cobrança nesse formato:
// "Mês/Ano"
// Mas a data no banco de dados vem assim:
//'2024-10-16T21:22:40.825Z'
// Essa função simplesmente extrai o mês e aplica a label dele com switch case, e extrai o ano tbm.

function getMes(mes: string) {
  switch (mes) {
    case "01":
      return "Janeiro";
    case "02":
      return "Fevereiro";
    case "03":
      return "Março";
    case "04":
      return "Abril";
    case "05":
      return "Maio";
    case "06":
      return "Junho";
    case "07":
      return "Julho";
    case "08":
      return "Agosto";
    case "09":
      return "Setembro";
    case "10":
      return "Outubro";
    case "11":
      return "Novembro";
    case "12":
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}

export const getMonth_and_year = (data_vencimento: string) => {
  const ano = data_vencimento.split("-")[0];
  const mes = getMes(data_vencimento.split("-")[1]);
  return `${mes}/${ano}`;
};
