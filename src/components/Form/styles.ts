import styled from 'styled-components';

export const Container = styled.form`
  width: 320px;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #757575;
  padding: 3rem;
  border-radius: 1rem;

  * {
    width: 100%;
  }

  label,
  legend {
    display: block;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #444;
  }

  legend {
    display: inline-block;
    width: fit-content;
    padding-inline: 2rem;
    font-weight: normal;
    font-size: 4rem;
    color: #222;
  }

  input {
    border: 1px solid #757575;
    display: block;
    font-size: 3.5rem;
    padding: 2rem;
    margin-bottom: 3rem;

    &:last-of-type {
      margin-bottom: 8.5rem;
    }
  }

  button {
    font-size: 3.5rem;
    padding: 3rem;
    cursor: pointer;
    font-weight: 500;

    & + button {
      margin-top: 3rem;
    }
  }

  & button.form-add {
    background-color: #a42cd6;
    color: white;
  }

  & button.form-cancell {
    background-color: transparent;
    border: 1px solid #757575;
    color: #444;
  }
`;
