import { FaRegBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MdMenu } from "react-icons/md";
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
          <h1 className="text-white hidden md:block">User</h1>
        </div>
      </div>
      <div className="text-white text-2xl cursor-pointer md:hidden block">
        <MdMenu />
      </div>
      <div className="pl-6 hidden md:block">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardUserInfo;
