import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Cobrancas } from "@/types/types";
import { formatarData } from "@/utils/formatDate";
import { getMonth_and_year } from "@/utils/GetMonthNYear";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditarCobrancaDialog } from "./NovaCobranca/EditarCobrancaDialog";
type TypeAlunoPerfilFinanceiroRow = {
  cobranca: Cobrancas;
};

export const AlunoPerfilFinanceiroRow = ({
  cobranca,
}: TypeAlunoPerfilFinanceiroRow) => {
  return (
    <>
      <TableRow key={cobranca.id}>
        <TableCell>{getMonth_and_year(cobranca.data)} </TableCell>
        <TableCell className="font-medium md:table-cell hidden">
          {formatarData(cobranca.data_vencimento)}
        </TableCell>

        <TableCell>
          {cobranca.status === "ABERTA" && (
            <Badge variant="secondary">Em Aberto</Badge>
          )}
          {cobranca.status === "VENCIDA" && (
            <Badge variant="destructive">Vencida</Badge>
          )}

          {cobranca.status === "PAGO" && <Badge variant="default">Paga</Badge>}
        </TableCell>
        <TableCell className="text-right md:table-cell hidden">
          R$ {cobranca.preco.toString()}
        </TableCell>
        <TableCell className="text-right md:table-cell hidden ">
          <Dialog>
            <DialogTrigger>
              <Button className="mr-2" variant="outline">
                Informações
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <EditarCobrancaDialog id={cobranca.id} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
};
