import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="flex flex-wrap w-[420px] p-5 pt-0 justify-between cursor-pointer">
      <div>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt={title}
          className="rounded-sm w-[400px] h-[260px]"
        />
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full flex pt-2">
          <div className="flex flex-1 items-center">
            <div className="pr-3 text-green-400">
              {isVerified && <GoVerified />}
            </div>
            <div className="font-bold text-lg">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </div>
          </div>

          <Image className="w-[60px] h-auto" width={60} height={60} src={agency?.logo?.url} alt="avatar" />
        </div>
        <div className="flex items-center p-1 justify-between w-[250px] text-blue-400">
          <div className="flex items-center justify-between space-x-3">
            <span>{rooms}</span>
            <span>
              <FaBed />
            </span>
            <span>|</span>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <span>{baths}</span>
            <span>
              <FaBath />
            </span>
            <span>|</span>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <span>{millify(area)} sqft </span>
            <span>
              <BsGridFill />
            </span>
          </div>
        </div>
        <div className="text-lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </div>
      </div>
    </div>
  </Link>
);

export default Property;
