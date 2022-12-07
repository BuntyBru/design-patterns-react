import React from "react";
import { TempProps } from "../../types/RenderPropsTypes";

export function Kelvin(props: TempProps) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{props.value}K</span>
    </div>
  );
}

export function Fahrenheit(props: TempProps) {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{props.value}°F</span>
    </div>
  );
}

export default function TemperatureConverter(props: {
  renderFahrenheit: (props: TempProps) => JSX.Element;
  renderKelvin: (props: TempProps) => JSX.Element;
}) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}
