import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <div className="w-full p-4">
    {photos && <ImageScrollbar data={photos} />}
    <div className="w-full">
      <div className="flex flex-1 items-center py-6">
        <div className="pr-3 text-green-400 text-4xl">
          {isVerified && <GoVerified />}
        </div>
        <div className="font-bold text-4xl">
          AED {price}
          {rentFrequency && `/${rentFrequency}`}
        </div>
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
    </div>
    <div className="mt-2">
      <div className="text-lg mb-2 font-bold">{title}</div>
      <div className="leading-8 text-gray-600">
        {(description = description.replace(/<(.|\n)*?>/g, ""))}
      </div>
    </div>
    <div className="flex flex-wrap uppercase justify-between">
      <div className="flex justify-between w-[400px] border-b-2 border-gray-100 p-3">
        <div>Type</div>
        <div className="font-bold">{type}</div>
      </div>
      <div className="flex justify-between w-[400px] border-b-2 border-gray-100 p-3">
        <div>Purpose</div>
        <div className="font-bold">{purpose}</div>
      </div>
      {furnishingStatus && (
        <div className="flex justify-between w-[400px] border-b-2 border-gray-100 p-3">
          <div>Furnishing Status</div>
          <div className="font-bold">{furnishingStatus}</div>
        </div>
      )}
    </div>
    <div>
      {amenities.length && (
        <div className="text-xl font-black mt-5">Facilites:</div>
      )}
      <div className="flex flex-wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <div
              key={amenity.text}
              className="font-bold text-blue-400 text-lg p-2 bg-gray-200 m-1 border-r-4 rounded-b-md"
            >
              {amenity.text}
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
