import { Badge } from "@/components/ui/badge";

export const AlunoInfos = () => {
  const usuarios = [
    {
      nome: "John Doe",
      email: "johndoe123@example.com",
      telefone: "(11) 98765-4321",
      idade: 22,
      vinculo: "aluno",
    },
  ];

  return (
    <div>
      <div>
        <div className="flex flex-col py-3">
          <span className="uppercase text-xs text-gray-500 font-semibold">
            E-mail:
          </span>
          <span>
            <span className="text-sm">johndoe@email.com</span>
          </span>
        </div>

        <div className="flex flex-col pb-3">
          <span className="uppercase text-xs text-gray-500 font-semibold">
            Tel:
          </span>
          <span>
            <span className="text-sm">(11) 98765-4321</span>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="uppercase text-xs text-gray-500 font-semibold">
            Idade:
          </span>
          <span>
            <span className="text-sm">22</span>
          </span>
        </div>

        <div className="flex flex-col pb-3">
          <span className="uppercase text-xs text-gray-500 font-semibold">
            Vínculo:
          </span>
          <span>
            {/* <span className="text-sm">(11) 98765-4321</span> */}
            <Badge>Aluno</Badge>
          </span>
        </div>
      </div>
    </div>
  );
};
