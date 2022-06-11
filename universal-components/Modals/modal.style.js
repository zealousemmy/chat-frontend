import styled from "styled-components";

export const ModalStyles = styled.div`
    z-index:3;
    padding:60px 0px 0px 50px;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    margin: auto;
    background-color:rgb(0,0,0);
    background-color:rgba(0,0,0,0.4)}

    .modal-content{

        display: flex;
        justify-content: center;

        .icon{
            z-index: 4;
            color: #fff;
            font-size: 42px;
            cursor: pointer;
        }
    }

`;
