import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.isDesktop ? "1300px" : "600px")};

  align-self: center;

  flex-wrap: ${(props) => (props.isDesktop ? "wrap" : "nowrap")};

  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  gap: 1rem;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
`;
