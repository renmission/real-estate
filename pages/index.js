import Link from "next/link";
import Image from "next/image";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

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
  <div className="flex justify-center items-center m-10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
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

function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>

      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <div className="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </>
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
