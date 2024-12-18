

type TypeRegisterHeader = {
  header: string;
  text: string;
};
export const RegisterHeader = ({ header, text }: TypeRegisterHeader) => {
  return (
    <div>
      <div className="text-white text-center xl:w-11/12 w-10/12 m-auto">
        <h1 className="xl:text-5xl font-light xl:mb-4  text-2xl mb-4">
          {header}
        </h1>
        <span className="font-extraligh xl:text-base">{text}</span>
      </div>
    </div>
  );
};
