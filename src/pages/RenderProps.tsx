import React from "react";
import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from "../components/RenderProps/TemperatureConvertor";
const RenderProps = () => {
  return (
    <TemperatureConverter
      renderKelvin={({ value }: { value: number }) => <Kelvin value={value} />}
      renderFahrenheit={({ value }: { value: number }) => (
        <Fahrenheit value={value} />
      )}
    />
  );
};

export default RenderProps;
