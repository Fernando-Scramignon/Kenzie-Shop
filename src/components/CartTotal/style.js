import styled from "styled-components";

export const Container = styled.div`
  height: 170px;
  width: 90%;
  max-width: 400px;
  border-radius: 8px;
  align-self: center;
  padding: 1.2rem;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    height: 35px;
    background: #6751ef;
    color: white;
    border-radius: 8px;

    transition: 0.333s;
    &:hover {
      background: #543bf0;
    }
  }

  .price {
    display: flex;
    justify-content: space-between;
    color: #9d9d9d;
    font-weight: 700;
  }

  @media (min-width: 1000px) {
    align-self: flex-start;
    max-width: 275px;
  }
`;
