import styled from "@emotion/styled";
import BgCar1 from "/img/BgCar1.jpg";

export const Item = styled.div`
  border: 1px solid white;
`;

export const Image = styled.div`
  background-image: url(${BgCar1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
`;

export const InfoBox = styled.div`
  padding: 10px;
`;
