import AlunosTable from "@/components/Alunos/AlunosTable";
import { AlunoTableNavbar } from "@/components/Alunos/AlunoTableNavbar";
import { Container } from "@/components/layout/Container";

const Alunos = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 ">
        <div className=" md:col-span-8 col-span-12">
          <div className="md:w-11/12 w-12/12">
            <AlunoTableNavbar />
            <AlunosTable />
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">2</div>
      </div>
    </Container>
  );
};

export default Alunos;
