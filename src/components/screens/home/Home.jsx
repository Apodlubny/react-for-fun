import React from "react";
import { Main, Item, Image, InfoBox } from "./Home.styled";
import cars from "./cars.data.json";

export const Home = () => {
  return (
    <Main>
      <h1>Cars application</h1>
      <div>
        {cars.map((car) => (
          <Item key={car.id}>
            <Image image={car.image} />
            <InfoBox>
              <h2>Car1</h2>
              <p>100000$</p>
              <button>Read more</button>
            </InfoBox>
          </Item>
        ))}
      </div>
    </Main>
  );
};
