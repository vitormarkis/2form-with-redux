import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
flex-grow: 1;
  display: grid;
  padding: 4rem;
  border-radius: 3rem;
  border-top: 2rem solid #a42cd6;
  border-bottom: 2px solid #00000020;
  gap: 1rem 2rem;
  box-shadow: 0 1rem 2rem #00000017;
  grid-template-areas:
    'texts    age'
    'projects projects';
  line-height: 1;

  & div:nth-of-type(1) {
    grid-area: texts;
    text-align: right;

    h3 {
      color: #a42cd6;
    }

    p {
      color: #757575;
      font-size: 3.5rem;
    }
  }

  & div:nth-of-type(2) {
    grid-area: age;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
      font-size: 9rem;
      font-weight: 600;
      color: #a42cd6;
    }
  }

  & div:nth-of-type(3) {
    grid-area: projects;
    text-align: right;
    margin-block: auto;
    display: flex;

    & > div {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        flex: 0 0 auto;
        width: calc(100% - 3rem);
        /* width: 100%; */
        height: 0.5rem;
        background-color: #a42cd6;
      }
    }

    span {
      color: #ff6663;
      font-weight: 600;
    }

    p {
      gap: 1rem;
      display: flex;
      flex-shrink: 0;
      color: #444;
    }
  }
`;
