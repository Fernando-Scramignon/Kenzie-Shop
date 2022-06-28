import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid grey;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;

  /* box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1); */

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      font-family: "Nunito";
    }

    span {
      font-size: 0.875rem;
      color: grey;
    }
  }

  .buttonsDiv {
    display: flex;
    width: 70px;
    justify-content: space-between;

    button {
      background: inherit;
    }

    .circle {
      position: absolute;
      right: 60px;
      top: 15px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #543bf0;
      color: white;
      font-size: 0.7rem;
    }
  }
`;
