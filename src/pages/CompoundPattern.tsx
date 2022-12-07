import useListings from "../components/HooksPatten/useListings";

const CompoundPattern = () => {
  const data = useListings();

  console.log(data);
  return <p>Compound Pattern</p>;
};

export default CompoundPattern;
