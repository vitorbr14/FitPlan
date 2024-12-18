type TypeAlunoPerfilWrapper = {
  children: string | JSX.Element | JSX.Element[];
  title?: string;
};

const AlunoPefilWrapper = ({ title, children }: TypeAlunoPerfilWrapper) => {
  return (
    <>
      <div className="relative">
        <h1 className="font-medium text-3xl py-4">{title}</h1>
      </div>
      <div className=" h-[50rem] pt-4">{children}</div>
    </>
  );
};

export default AlunoPefilWrapper;
