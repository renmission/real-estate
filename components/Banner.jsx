import Image from "next/image";
import Link from "next/link";

export const Banner = ({
    purpose,
    title1,
    title2,
    desc1,
    desc2,
    buttonText,
    linkName,
    imageUrl,
  }) => (
    <div className="flex flex-col justify-center m-10">
      <Image src={imageUrl} width={500} height={300} className="w-[500px] h-[300px]" alt="banner" />
      <div className="p-5">
        <div className="text-gray-500 text-sm font-medium">{purpose}</div>
        <div className="text-3xl font-bold">
          {title1}
          <br />
          {title2}
        </div>
        <div className="text-lg py-3 text-gray-700">
          {desc1}
          <br />
          {desc2}
        </div>
        <button className="text-xl bg-blue-600 text-white p-4 rounded-sm">
          <Link href={linkName}>
            <div>{buttonText}</div>
          </Link>
        </button>
      </div>
    </div>
  );