import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";

import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <>
      <div onClick={() => setSearchFilters(!searchFilters)} className="bg-gray-100 p-2 border-b-2 border-gray-200 font-black text-lg justify-center text-center flex items-center space-x-2 cursor-pointer">
        <span>Search Property By Filters</span> <BsFilter />
      </div>
      {searchFilters && <SearchFilters />}
      <h2 className="text-2xl p-4 font-bold">
        Properties {router.query.purpose}
      </h2>
      <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3">
        {properties.map(property => <Property key={property.id} property={property} />)}
      </div>
      {properties.length === 0 && (
         <div className="flex flex-col my-5 justify-center text-center items-center align-middle">
            <Image alt="No result" src={noresult} />
            <h2 className="text-2xl mt-3">No results found</h2>
         </div>
      )}
    </>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}


