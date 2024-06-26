import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`

export const ModalContainer = styled.div`
  min-height: 400px;
  width: 500px;
  background-color: #fcfcfd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  z-index: 10;

  @media only screen and (max-width: 400px) {
    height: 400px;
    width: 90vw;
    overflow-y: scroll;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-family: 'Nunito', sans-serif;
`

export const Close = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  transition: 150ms ease-in-out;

  :hover { 
    background-color: rgba(1, 1, 1, 0.2);
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const Link = styled.a`
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(1, 1, 1, 0.2);
  padding: 10px;
  transition: 150ms ease-in-out;
  color: black;
  text-decoration: none;
  font-family: 'Mulish', sans-serif;

  :hover { 
    background-color: rgba(1, 1, 1, 0.1);
  }
`
export const P = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
`
