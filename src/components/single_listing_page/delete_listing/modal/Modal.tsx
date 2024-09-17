import Backdrop from "../../../ui/Backdrop";
import XcloseBtn from "../../../ui/buttons/XcloseBtn";
import Buttons from "./Buttons";
import Heading from "./Heading";

type Props = {
  modalHandler: () => void;
};

export default function Modal({ modalHandler }: Props) {
  return (
    <>
      <Backdrop onClick={modalHandler} />
      <div className="z-50 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 | flex flex-col justify-center items-center gap-[35px] | px-[170px] py-[58px] | bg-white rounded-[10px] select-none">
        <Heading />
        <span className="absolute top-[30px] right-[30px]">
          <XcloseBtn onClick={modalHandler} />
        </span>
        <Buttons
          cancelAct={modalHandler}
          deleteAct={() => console.log("წაიშალა ლისტინგი")}
        />
      </div>
    </>
  );
}
