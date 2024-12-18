import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
const AlunoPerfilFinanceiroTable_Skeleton = () => {
  const cobrancasRows = [1, 2, 3, 4, 5];

  return (
    <>
      {cobrancasRows.map((cobranca) => {
        return (
          <TableRow className="h-20">
            <TableCell className="py-3">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </TableCell>
            <TableCell className=" ">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </TableCell>
            <TableCell className="flex justify-center">
              <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default AlunoPerfilFinanceiroTable_Skeleton;
