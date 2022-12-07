import React from "react";
import LoaderComponent from "./LoaderComponent";
import { ListingProps, WithLoaderProps, HouseListProps } from "../../types/ConPresTypes";

function WithLoader<T extends HouseListProps>(
  Component: React.ComponentType<T>,
  url: string
) {
  return (props: Omit<T, keyof WithLoaderProps>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = React.useState<ListingProps[] | null>(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res?.listings);
        });
    }, []);
    return data ? (
      <Component {...(props as T)} data={data} />
    ) : (
      <LoaderComponent />
    );
  };
}

export default WithLoader;
