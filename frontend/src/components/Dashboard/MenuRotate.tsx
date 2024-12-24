import { AlignJustify, X } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { animate, motion } from "motion/react";
type TypeMenuRotateProps = {
  handleMenu: boolean;
  setHandleMenu: Dispatch<SetStateAction<boolean>>;
};
export const MenuRotate = ({
  handleMenu,
  setHandleMenu,
}: TypeMenuRotateProps) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <motion.div
      className=" w-[50px] h-[50px] flex justify-center items-center cursor-pointer   "
      onClick={() => setHandleMenu(!handleMenu)}
      animate={{
        rotate: handleMenu ? -90 : [90, 0],
      }}
    >
      {handleMenu ? <X size={32} /> : <AlignJustify size={32} />}
    </motion.div>
  );
};
