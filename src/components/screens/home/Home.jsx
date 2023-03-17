import React from "react";
import { Main } from "./Home.styled";
import { CarList } from "../carList/CarList";
import cars from "./cars.data.json";

export const Home = () => {
  return (
    <Main>
      <h1>Cars application</h1>
      <div>
        <CarList cars={cars} />
      </div>
    </Main>
  );
};
