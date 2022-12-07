import React from "react";
import styled from "styled-components";
import HouseListingComponent from "../components/ContainerPresentationalPattern/HouseListingComponent";

const StyledParent = styled.div``;

const ContainerPresentationalPattern = () => {
  return (
    <StyledParent>
      <HouseListingComponent />
    </StyledParent>
  );
};

export default ContainerPresentationalPattern;
