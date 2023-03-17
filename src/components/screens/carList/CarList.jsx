import React from "react";
import { List } from "./CarList.styled";
import { CarItem } from "../carItem/CarItem";

export const CarList = ({ cars }) => {
  return (
    <List>
      {cars.map((car, id) => (
        <li key={id}>
          <CarItem car={car} />
        </li>
      ))}
    </List>
  );
};
