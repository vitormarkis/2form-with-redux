import styled from "styled-components"

export const Container = styled.div`
  &.done {
    background-color: #eee;
    box-shadow: 0 -2rem 0 hsl(282deg 67% 25%);

    & button {
      background-color: #757575 !important;
    }

    & div:nth-of-type(1) {
      h3 {
        color: #757575;
      }
    }

    & div:nth-of-type(2) {
      p {
        color: #757575;
      }
    }
    & div:nth-of-type(3) {
      span {
        color: #757575;
      }
      & > div {
        div {
          background-color: #757575;
        }
      }
    }
  }

  background-color: #fff;
  flex-grow: 1;
  display: grid;
  padding: 4rem;
  border-bottom: 2px solid #00000020;
  border-inline: 2px solid #00000020;
  gap: 1rem 2rem;
  /* box-shadow: 0 1rem 2rem #00000017; */
  margin-top: 2rem;
  box-shadow: 0 -2rem 0 #a42cd6;
  grid-template-areas:
    "texts    age"
    "projects projects"
    "buttons buttons";
  line-height: 1;

  & div:nth-of-type(1) {
    grid-area: texts;
    text-align: right;

    h3 {
      color: #a42cd6;
      white-space: nowrap;
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
  & div:nth-of-type(4) {
    display: flex;
    gap: 3rem;
    padding-top: 2rem;

    > button {
      flex: 1 0 0;
    }

    button {
      padding: 1rem;
      color: white;
    }

    .item-delete {
      background-color: #ee6352;
    }

    .item-edit {
      background-color: #08b2e3;
    }

    .item-toggle {
      background-color: #57a773;
    }
  }
`
