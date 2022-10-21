import { useState, useCallback, useMemo } from "react";
import Image from "next/image";

import ControlledInput from "./Input";

import eyeOpen from "../../public/assets/icons/eyeOpen.svg";
import eyeClosed from "../../public/assets/icons/eyeClosed.svg";

export default function PasswordInput({ className, ...props }) {
  const [type, setType] = useState("password");

  const showPassword = useCallback(() => {
    setType((prevType) => (prevType === "text" ? "password" : "text"));
  }, []);

  const showEye = useMemo(
    () => (type === "text" ? eyeOpen : eyeClosed),
    [type]
  );

  return (
    <ControlledInput
      className={className}
      {...props}
      type={type}
      placeholder="*********"
      right={
        <div
          className="w-[20%] h-5 absolute top-3 right-2 cursor-pointer"
          onClick={showPassword}
        >
          <Image alt="image of eye" src={showEye} layout="fill" />
        </div>
      }
    />
  );
}
