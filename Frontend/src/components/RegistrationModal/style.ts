import styled from 'styled-components';

const RegisterModalStyled = styled.div`
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--color-shading300);
      font-size: clamp(var(--font-size-5), 5vw, var(--font-size-3));
    }
  }

  & > :nth-child(2) {
    button {
      margin-top: 30px;
    }
  }
`;

const StyledError = styled.p`
  margin-top: 10px;
  color: var(--color-negative);
  font-size: clamp(var(--font-size-9), 3vw, var(--font-size-6));
`;

export { RegisterModalStyled, StyledError };
