import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlunoPerfilFinanceiroTable } from "../FinanceiroTabela/AlunoPerfilFinanceiroTable";

import AlunoPefilWrapper from "../AlunoPefilWrapper";
import { MatriculaTabela } from "../MatriculaTabela/MatriculaTabela";
import { TreinoTabela } from "../TreinosTabela/TreinoTabela";
import { AlunoInfos } from "../AlunoInfos/AlunoInfos";
import { Button } from "@/components/ui/button";

export const AlunoPerfilNavbar = () => {
  return (
    <div>
      <Tabs defaultValue="info" className="flex flex-col">
        <div className="relative rounded-sm overflow-x-scroll h-10 bg-muted">
          <TabsList className="absolute flex flex-row justify-stretch w-full">
            {/* <TabsTrigger value="info" className="w-full">
              Informações
            </TabsTrigger> */}
            <TabsTrigger value="financeiro" className="w-full">
              Financeiro
            </TabsTrigger>
            <TabsTrigger value="matricula" className="w-full">
              Matricula
            </TabsTrigger>
            <TabsTrigger value="treinos" className="w-full">
              Treinos
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="info">
          {/* <AlunoPefilWrapper title="Informações do Aluno">
            <AlunoInfos />
          </AlunoPefilWrapper> */}
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
    </div>
  );
};
