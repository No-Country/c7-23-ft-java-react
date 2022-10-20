import Image from "next/image";
import AddIcon from "../../public/assets/icons/addIcon.svg";

export default function ButtonAdd({ nameButton, handleButton }) {
  return (
    <button
      className="btn btn-primary rounded-xl flex items-center justify-center"
      onClick={handleButton}
    >
      <div className="h-7 w-7 relative mr-2">
        <Image alt="add an appoiment" layout="fill" src={AddIcon} />
      </div>
      {nameButton}
    </button>
  );
}
