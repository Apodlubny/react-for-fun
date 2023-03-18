import React from "react";
import { Main } from "./Home.styled";
import { CarList } from "../carList/CarList";
import cars from "./cars.data.json";
import { CarForm } from "../CarForm/CarForm";

export const Home = () => {
  return (
    <Main>
      <h1>Cars application</h1>
      <CarForm />
      <div>
        <CarList cars={cars} />
      </div>
    </Main>
  );
};
