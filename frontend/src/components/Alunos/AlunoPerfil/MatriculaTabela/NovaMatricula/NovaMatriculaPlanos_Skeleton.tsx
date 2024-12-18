import { Skeleton } from "@/components/ui/skeleton";

export const NovaMatriculaPlanos_Skeleton = () => {
  return (
    <div>
      <Skeleton className="w-[210px] h-[15px] rounded-sm my-4" />
      <div className="flex justify-between">
        <Skeleton className="w-[172px] h-[90px] rounded-sm" />
        <Skeleton className="w-[172px] h-[90px] rounded-sm" />
        <Skeleton className="w-[172px] h-[90px] rounded-sm" />
      </div>
    </div>
  );
};
