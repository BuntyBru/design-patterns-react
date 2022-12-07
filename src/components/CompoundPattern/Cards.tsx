import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 300px;
  margin: 2rem;
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

const StyledDetailsContainer = styled.div`
  padding: 20px;
`;

type ImageProps = {
  title: string;
  image: string;
};

const Cards = (props: any) => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

const ImageSection = ({ title, image }: ImageProps) => {
  return (
    <StyledImageContainer>
      <img alt={title} src={image} />
    </StyledImageContainer>
  );
};

const DetailsContainer = (props: any) => {
  return <StyledDetailsContainer>{props.children}</StyledDetailsContainer>;
};

const Heading = ({ name }: { name: string }) => {
  return <h3 style={{ marginBottom: ".2em" }}>{name}</h3>;
};

const CityState = ({ city, state }: { city: string; state: string }) => {
  return (
    <span style={{ color: "lightslategrey", fontSize: ".8em" }}>
      {city},{state}
    </span>
  );
};

const Price = ({ price }: { price: number }) => {
  return (
    <h3 style={{ color: "deeppink" }}>
      ${new Intl.NumberFormat("en-US").format(price)}
    </h3>
  );
};

const FloorsAndRooms = ({
  floors,
  rooms,
  sqft,
}: {
  floors: number;
  rooms: number;
  sqft: number;
}) => {
  return (
    <span style={{ color: "lightslategrey", fontSize: ".8em" }}>
      {floors} floor, {rooms} rooms, {sqft}ft
    </span>
  );
};

Cards.Image = ImageSection;
Cards.DetailsContainer = DetailsContainer;
Cards.heading = Heading;
Cards.CityState = CityState;
Cards.Price = Price;
Cards.FloorsAndRooms = FloorsAndRooms;

export { Cards };
