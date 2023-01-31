import styled from "styled-components"

export const Container = styled.div`
  width: 150rem;
  display: flex;
  padding: 3rem;

  /* width: max(480px, min(60vw, 720px)); */
  flex-shrink: 0;
  height: 180rem;
  overflow-y: scroll;
`

export const CandidatesContainer = styled.div`
  height: fit-content;
  flex-grow: 1;
  gap: 3rem;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    flex-basis: 34%;
  }
`
