import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.isDesktop ? "30%" : "90%")};
  max-width: ${(props) => (props.isDesktop ? "none" : "400px")};
  min-width: ${(props) => (props.isDesktop ? "none" : "280px")};
  height: 370px;
  padding: 1rem 1.3rem 0;
  background: white;
  border-radius: 8px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  img {
    width: 50%;
    max-width: 165px;
    height: 200px;
  }

  h2 {
    align-self: flex-start;
  }

  span {
    font-size: 1.2rem;
    align-self: flex-start;
    color: #9d9d9d;
    font-weight: 700;
  }

  button {
    width: 100%;
    height: 40px;
    background: #6751ef;
    color: white;
    font-weight: 700;

    transition: 0.333s;
    &:hover {
      background: #543bf0;
    }
  }

  .priceDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    max-width: 600px;
  }
`;
