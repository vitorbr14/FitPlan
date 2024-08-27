import { Input } from "@/components/ui/input";

type TypeMatriculas = {
  id: number;
  label: string;
};

const matriculas: TypeMatriculas[] = [
  {
    id: 1,
    label: "Mensal",
  },
  {
    id: 2,
    label: "Semestral",
  },
  {
    id: 3,
    label: "Anual",
  },
];

const FormStep3 = ({}: any) => {
  return (
    <>
      {matriculas.map((matricula) => {
        return (
          <div className="col-span-4 ">
            <div className="flex flex-col items-center">
              <Input type="radio" key={matricula.id} />
              <span className="">{matricula.label}</span>
            </div>
          </div>
        );
      })}
      <div className="col-span-12 ">Cobrança a partir do dia: </div>
      <div className="col-span-5">
        <Input type="date" />
      </div>

      <div className="col-span-12 ">
        Com <span>Vencimento</span> todo dia:
      </div>
      <div className="col-span-5">
        <Input type="number" />
      </div>
    </>
  );
};

export default FormStep3;
