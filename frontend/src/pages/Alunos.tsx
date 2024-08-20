import AlunosTable from "@/components/Alunos/AlunosTable";
import { AlunoTableNavbar } from "@/components/Alunos/AlunoTableNavbar";
import { Container } from "@/components/layout/Container";

const Alunos = () => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className=" col-span-8 ">
          <div className="w-11/12">
            <AlunoTableNavbar />
            <AlunosTable />
          </div>
        </div>
        <div className="col-span-4 ">2</div>
      </div>
    </Container>
  );
};

export default Alunos;
