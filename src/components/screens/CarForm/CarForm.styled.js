import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px auto 20px;
  & input {
    padding: 5px 10px;
    border: 1px solid transparent;
    outline: none;
    transition: border 0.4s ease;
    margin-bottom: 10px;
    :focus {
      border: 1px solid orangered;
    }
  }
`;
