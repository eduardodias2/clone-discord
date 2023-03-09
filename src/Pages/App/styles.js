import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  h1 {
    color: blue;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;

export const Paragraph = styled.p`
  color: green;
`;
