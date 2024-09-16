import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlunoPerfilFinanceiroTable } from "../FinanceiroTabela/AlunoPerfilFinanceiroTable";

import AlunoPefilWrapper from "../AlunoPefilWrapper";
import { MatriculaTabela } from "../MatriculaTabela/MatriculaTabela";
import { TreinoTabela } from "../TreinosTabela/TreinoTabela";
import { AlunoInfos } from "../AlunoInfos/AlunoInfos";
import { Button } from "@/components/ui/button";

export const AlunoPerfilNavbar = () => {
  return (
    <>
      <Tabs defaultValue="info">
        <TabsList className="">
          <TabsTrigger value="info" className="">
            Informações
          </TabsTrigger>
          <TabsTrigger value="financeiro" className="">
            Financeiro
          </TabsTrigger>
          <TabsTrigger value="matricula" className="">
            Matricula
          </TabsTrigger>
          <TabsTrigger value="treinos" className="">
            Treinos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <AlunoPefilWrapper title="Informações do Aluno">
            <AlunoInfos />
          </AlunoPefilWrapper>
        </TabsContent>
        <TabsContent value="financeiro">
          <AlunoPefilWrapper title="Financeiro">
            <AlunoPerfilFinanceiroTable />
          </AlunoPefilWrapper>
        </TabsContent>
        <TabsContent value="matricula">
          <AlunoPefilWrapper title="Matrícula">
            <MatriculaTabela />
          </AlunoPefilWrapper>
        </TabsContent>
        <TabsContent value="treinos">
          <AlunoPefilWrapper title="Treinos">
            <TreinoTabela />
          </AlunoPefilWrapper>
        </TabsContent>
      </Tabs>
    </>
  );
};
