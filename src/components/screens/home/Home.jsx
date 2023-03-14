import React from "react";
import { Main, Item, Image } from "./Home.styled";

export const Home = () => {
  return (
    <Main>
      <h1>Cars application</h1>
      <div>
        <Item>
          <Image />
          <h2>Car1</h2>
          <p>100000$</p>
          <button>Read more</button>
        </Item>
      </div>
    </Main>
  );
};
