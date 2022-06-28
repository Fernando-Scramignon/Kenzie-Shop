import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 1000px) {
    .content {
      width: 100%;
      flex-direction: row-reverse;
      gap: 5%;
      justify-content: center;
    }
  }
`;
