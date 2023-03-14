import React from "react";
import { Item, Image, InfoBox } from "./CarItem.styled";

export const CarItem = ({ car: { name, price, image } }) => {
  return (
    <Item>
      <Image image={image} />
      <InfoBox>
        <h2>{name}</h2>
        <p>{price}$</p>
        <button>Read more</button>
      </InfoBox>
    </Item>
  );
};
