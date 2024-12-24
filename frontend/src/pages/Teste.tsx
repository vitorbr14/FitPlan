import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { animate, motion } from "motion/react";
export const Teste = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      className=" w-[50px] h-[50px] flex justify-center items-center cursor-pointer   "
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 90 : 0,
      }}
    >
      {isActive ? <X size={32} /> : <AlignJustify size={32} />}
    </motion.div>
  );
};
