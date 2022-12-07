import React from "react";
import { ListingProps } from "../../types/ConPresTypes";
import Listing from "../ContainerPresentationalPattern/Lisitings";
import useListings from "./useListings";

const House = () => {
  const data: ListingProps[] | null = useListings();

  return (
    <div>
      {data?.map((element) => (
        <Listing listing={element} />
      ))}
    </div>
  );
};

export default House;
