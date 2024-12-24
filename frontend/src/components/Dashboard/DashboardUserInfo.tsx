import { FaRegBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MdMenu } from "react-icons/md";
import { MenuRotate } from "./MenuRotate";
import { useEffect, useState } from "react";
import { useMobileMenu } from "@/store/MobileMenuStore";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
const DashboardUserInfo = () => {
  const location = useLocation();

  const [handleMenu, setHandleMenu] = useState<boolean>(false);

  // Esse effect serve para icon do menu voltar para a posição inicial.
  useEffect(() => {
    setHandleMenu(false);
  }, [location.pathname]);
  const { handleIsOpen } = useMobileMenu();
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-4">
        {/* <div className="relative ">
          <Badge variant="destructive" className="absolute right-2 bottom-3">
            1
          </Badge>
          <FaRegBell className="text-white text-xl cursor-pointer" />
        </div> */}

        <div>
          <h1 className="text-white hidden md:block">User</h1>
        </div>
      </div>
      <div
        className="text-white text-2xl cursor-pointer md:hidden block z-[99]"
        onClick={handleIsOpen}
      >
        <MenuRotate handleMenu={handleMenu} setHandleMenu={setHandleMenu} />
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
