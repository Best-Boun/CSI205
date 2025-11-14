import { useState, useEffect } from "react";
import Value from "./Value";

const Temperatures = () => {
  const [celsius, setCelsius] = useState(25.0);
  const [fahrenheit, setFahrenheit] = useState(77.0);
  const [kelvin, setKelvin] = useState(298.15);

  // อัพเดทฟาเรนไฮต์และเคลวินเมื่อเซลเซียสเปลี่ยนแปลง
  useEffect(() => {
    const newFahrenheit = (celsius * 9) / 5 + 32;
    const newKelvin = celsius + 273.15;
    setFahrenheit(parseFloat(newFahrenheit.toFixed(2)));
    setKelvin(parseFloat(newKelvin.toFixed(2)));
  }, [celsius]);

  // อัพเดทเซลเซียสและเคลวินเมื่อฟาเรนไฮต์เปลี่ยนแปลง
  useEffect(() => {
    const newCelsius = ((fahrenheit - 32) * 5) / 9;
    const newKelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
    setCelsius(parseFloat(newCelsius.toFixed(2)));
    setKelvin(parseFloat(newKelvin.toFixed(2)));
  }, [fahrenheit]);

  // อัพเดทเซลเซียสและฟาเรนไฮต์เมื่อเคลวินเปลี่ยนแปลง
  useEffect(() => {
    const newCelsius = kelvin - 273.15;
    const newFahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    setCelsius(parseFloat(newCelsius.toFixed(2)));
    setFahrenheit(parseFloat(newFahrenheit.toFixed(2)));
  }, [kelvin]);

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-4 bg-light mt-3"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-center fw-bold mb-4">TEMPERATURES</h1>

      <div className="d-flex justify-content-between gap-5 mb-4">
        {/* Celsius Section */}
        <div className="d-flex flex-column align-items-center">
          <div className="text-center fs-5 fw-bold mb-2 badge bg-primary">
            {celsius.toFixed(2)}°C
          </div>
          <Value
            name={"Celsius"}
            Value={celsius}
            setValue={setCelsius}
            type={"real"}
          />
        </div>

        {/* Fahrenheit Section */}
        <div className="d-flex flex-column align-items-center">
          <div className="text-center fs-5 fw-bold mb-2 badge bg-primary">
            {fahrenheit.toFixed(2)}°F
          </div>
          <Value
            name={"Fahrenheit"}
            Value={fahrenheit}
            setValue={setFahrenheit}
            type={"real"}
          />
        </div>

        {/* Kelvin Section */}
        <div className="d-flex flex-column align-items-center">
          <div className="text-center fs-5 fw-bold mb-2 badge bg-primary">
            {kelvin.toFixed(2)}°K
          </div>
          <Value
            name={"Kelvin"}
            Value={kelvin}
            setValue={setKelvin}
            type={"real"}
          />
        </div>
      </div>
    </div>
  );
};

export default Temperatures;
