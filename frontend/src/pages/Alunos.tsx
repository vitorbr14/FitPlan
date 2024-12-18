import { AlunoTableNavbar } from "@/components/Dashboard/DashboardTable/AlunoTableNavbar";
import { Table } from "@/components/Dashboard/DashboardTable/Table";
import { Container } from "@/components/layout/Container";

const Alunos = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 ">
        <div className=" md:col-span-12 col-span-12">
          <div className="md:w-11/12 w-12/12">
            <Table fetchName="alunos" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Alunos;
