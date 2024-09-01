import AlunoPerfilBanner from "@/components/Alunos/AlunoPerfil/AlunoPerfilBanner";
import { AlunoPerfilBreadcrumb } from "@/components/Alunos/AlunoPerfil/AlunoPerfilBreadcrumb";
import { AlunoPerfilFinanceiroTable } from "@/components/Alunos/AlunoPerfil/FinanceiroTabela/AlunoPerfilFinanceiroTable";
import { AlunoPerfilNavbar } from "@/components/Alunos/AlunoPerfil/AlunoNavBar/AlunoPerfilNavbar";
import { Container } from "@/components/layout/Container";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const AlunoPerfil = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading)
    return (
      <>
        <Skeleton className="w-64 h-4" />
      </>
    );
  return (
    <Container>
      <div className="lg:w-10/12 m-auto">
        <div className="py-5">
          <AlunoPerfilBreadcrumb />
        </div>

        <div>
          <AlunoPerfilBanner />
        </div>

        <div className="py-6 ">
          <AlunoPerfilNavbar />
        </div>

        {/* <div className="py-10">
          <AlunoPerfilFinanceiroTable />
        </div> */}
      </div>
    </Container>
  );
};
