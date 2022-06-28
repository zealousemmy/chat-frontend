import styled from "styled-components";

export const PreLoaderContainer = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
align-items: center;
  align-content: center;
  
  .loader-wrapper{
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animate 2s linear infinite;

    //animation-name: animate;
    //anion-timing-function: ease-in-out;
    //animation-iteraimattion-count: infinite;
    .logo-text{
      font-weight: bolder;
      font-size: 30px;
      font-family: 'Poppins';
      font-style: normal;
      color:#1F2937
    }
  }
  @keyframes animate {
    from {
      opacity: 1;
    }to{
    opacity: 0.5;
     }
  }
  
`