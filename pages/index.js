import Link from "next/link";
import Image from "next/image";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
import { bannerData } from "@/utils/bannerData";
import { Banner } from "@/components/Banner";
import SearchFilters from "@/components/SearchFilters";
import { BsFilter } from "react-icons/bs";

function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      {bannerData &&
        bannerData.map((data) => <Banner key={data.purpose} {...data} />)}
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
