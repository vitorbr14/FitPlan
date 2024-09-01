const AlunoPerfilBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-sky-800 h-80 rounded-xl flex justify-center items-center">
      <div>
        <div className="bg-white w-36 h-36 rounded-full mb-4"></div>
        <div className="text-center text-xl text-white font-bold">John Doe</div>
        <div className="flex justify-center mt-2">
          <h1 className="bg-white px-3 py-1 rounded-md text-xs font-bold uppercase">
            Aluno
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AlunoPerfilBanner;
