import { useState } from "react";
import { Form } from "./CarForm.styled";

export const CarForm = ({ setUserCars }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    setUserCars((prev) => [
      ...prev,
      { id: prev.length + 1, name, price, image },
    ]);
  };
  return (
    <Form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={(e) => createCar(e)}>Create</button>
    </Form>
  );
};
