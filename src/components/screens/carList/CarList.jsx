import React from "react";
import { List } from "./CarList.styled";
import { CarItem } from "../carItem/CarItem";

export const CarList = ({ cars }) => {
  return (
    <List>
      {cars.length ? (
        cars.map((car, id) => <CarItem key={id} car={car} />)
      ) : (
        <p>There are no cars</p>
      )}
    </List>
  );
};
