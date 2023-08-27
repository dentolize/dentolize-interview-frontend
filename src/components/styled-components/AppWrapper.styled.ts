import styled from "styled-components";

export const AppWrapper = styled.div`

      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--app-container);
      transition: .2s;
      max-width: 1800px;
      
      button, input, optgroup, select, textarea {
        font-family: 'DM Sans', sans-serif;
      }
`