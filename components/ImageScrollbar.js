import { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className="justify-center align-middle items-center mr-1">
      <FaArrowAltCircleLeft
        onClick={() => scrollPrev()}
        className="cursor-pointer text-2xl items-center align-middle mt-[320px]"
        d={["none", "none", "none", "block"]}
      />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className="justify-center align-middle items-center ml-1">
      <FaArrowAltCircleRight
        onClick={() => scrollNext()}
        className="cursor-pointer text-2xl items-center align-middle mt-[320px]"
        d={["none", "none", "none", "block"]}
      />
    </div>
  );
};

export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <div key={item.id} className="w-[910px] overflow-hidden p-1">
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </div>
      ))}
    </ScrollMenu>
  );
}
