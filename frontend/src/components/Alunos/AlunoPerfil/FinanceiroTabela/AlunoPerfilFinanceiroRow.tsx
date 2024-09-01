import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Cobrança } from "./AlunoPerfilFinanceiroTable";
import { Badge } from "@/components/ui/badge";

type TypeAlunoPerfilFinanceiroRow = {
  props: Cobrança;
};

export const AlunoPerfilFinanceiroRow = ({
  props,
}: TypeAlunoPerfilFinanceiroRow) => {
  return (
    <>
      <TableRow>
        <TableCell>{props.referencia}/2024</TableCell>
        <TableCell className="font-medium">{props.dataVencimento} </TableCell>

        <TableCell>
          {props.status === "Aberta" && (
            <Badge variant="secondary">Em Aberto</Badge>
          )}
          {props.status === "Vencida" && (
            <Badge variant="destructive">Vencida</Badge>
          )}

          {props.status === "Paga" && <Badge variant="default">Paga</Badge>}
        </TableCell>
        <TableCell className="text-right">R$ {props.valor}</TableCell>
        <TableCell className="text-right ">
          <Button className="mr-2" variant="outline">
            Informações
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};
