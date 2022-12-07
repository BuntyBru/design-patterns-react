import useListings from "../components/HooksPatten/useListings";
import { Cards } from "../components/CompoundPattern/Cards";

const CompoundPattern = () => {
  const data = useListings();

  return (
    <>
      {data ? (
        data.map((elem) => (
          <Cards key={elem.name}>
            <Cards.Image {...{ title: elem.name, image: elem.image }} />
            <Cards.DetailsContainer>
              <Cards.Heading {...{ name: elem.name }} />
              <Cards.CityState {...{ city: elem.city, state: elem.state }} />
              <Cards.Price {...{ price: elem.price }} />
              <Cards.FloorsAndRooms
                {...{ floors: elem.floors, rooms: elem.rooms, sqft: elem.sqft }}
              />
            </Cards.DetailsContainer>
          </Cards>
        ))
      ) : (
        <p>Hello</p>
      )}
    </>
  );
};

export default CompoundPattern;
