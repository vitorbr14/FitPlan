import { FaRegBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const DashboardUserInfo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Badge variant="destructive" className="absolute right-2 bottom-3">
            1
          </Badge>
          <FaRegBell className="text-white text-xl cursor-pointer" />
        </div>

        <div>
          <h1 className="text-white">User</h1>
        </div>
      </div>

      <div className="pl-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardUserInfo;
