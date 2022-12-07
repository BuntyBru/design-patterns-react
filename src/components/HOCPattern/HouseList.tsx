import React from "react";
import { ListingProps, HouseListProps } from "../../types/ConPresTypes";
import Listing from "../ContainerPresentationalPattern/Lisitings";
import WithLoader from "./withLoader";

const HouseList = (props: HouseListProps) => {
  console.log("==>", props);
  return (
    <div>
      {props.data?.map((element: ListingProps) => (
        <Listing key={element.name} listing={element} />
      ))}
    </div>
  );
};

export default WithLoader(
  HouseList,
  "https://house-lydiahallie.vercel.app/api/listings"
);
