import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "@/utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const { pathname } = router;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname, query });
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-wrap justify-center">
      {filters.map((filter, i) => (
        <div key={i}>
          <select
            className="flex flex-wrap justify-between bg-gray-100 text-gray-900 text-sm w-full p-2.5 border border-gray-300 rounded-lg"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            <option value={filter.placeholder} >{filter.placeholder}</option>
            {filter?.items.map((item,i) => (
              <option value={item.value} key={i}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
