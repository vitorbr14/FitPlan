import { GoPlus } from "react-icons/go";

export const AddExercicioBtn = () => {
  return (
    <div className="border-2 border-dashed  bg-gray-100 hover:border-blue-600 py-6 flex justify-center items-center transition-all">
      <div className="flex items-center">
        <GoPlus className="text-xl text-blue-800" />
        <span className="text-blue-800">Adicionar Exercício</span>
      </div>
    </div>
  );
};
