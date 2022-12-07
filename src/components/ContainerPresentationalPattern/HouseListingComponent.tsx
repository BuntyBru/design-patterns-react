import React from "react";
import { ListingProps } from "../../types/ConPresTypes";
import Listing from "./Lisitings";

const HouseListingComponent = () => {
  const [data, setData] = React.useState<ListingProps[] | null>(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res?.listings);
      });
  }, []);
  return (
    <div>
      {data?.map((element) => (
        <Listing listing={element} />
      ))}
    </div>
  );
};

export default HouseListingComponent;
