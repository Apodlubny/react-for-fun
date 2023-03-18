import React, { useState } from "react";
import { Main } from "./Home.styled";
import { CarList } from "../carList/CarList";
import cars from "./cars.data.json";
import { CarForm } from "../CarForm/CarForm";

export const Home = () => {
  const [userCar, setUserCars] = useState(cars);
  console.log(userCar);
  return (
    <Main>
      <h1>Cars application</h1>
      <CarForm setUserCars={setUserCars} />
      <div>
        <CarList cars={userCar} />
      </div>
    </Main>
  );
};
