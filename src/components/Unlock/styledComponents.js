// Style your elements here
import styled from 'styled-components'

export const LockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  padding: 10px;
`

export const LockImage = styled.img`
  width: 100px;
`

export const LockText = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #e2e8f0;
  margin-bottom: 60px;
  text-align: center;
`

export const LockButton = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`
