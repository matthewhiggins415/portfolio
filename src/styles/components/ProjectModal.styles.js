import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 100px;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  min-height: 300px;
  width: 300px;
  background-color: #6EE7B7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Close = styled.button`
  padding: 5px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 15px;
  font-weight: 600;
`