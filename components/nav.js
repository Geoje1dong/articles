import React from 'react'
import styled from 'styled-components'
import { Inbox, BarChart2 } from 'react-feather';

export default class Nav extends React.Component{
  
  state = {
    menuModal: false
  }

  handleclick = () => {
    alert('메뉴 작업중입니다.')
  }

  render(){
    return(
      <>
      <StyledNavBar>
        <span><Inbox  /></span>
        <Button onClick={this.handleclick}>
          <BarChart2 />
        </Button>
      </StyledNavBar>
      </>
    )
  }
}

const StyledNavBar = styled.div`
  display:flex;
  margin-bottom:36px;
  a {
    color:#1f1f1f;
    text-decoration:none;
  }
`
const Button = styled.button`
  margin-left:auto;
  cursor:pointer;
  background:none;
  border:0;
  >svg {
    transform:rotate(270deg)
  }
  :focus, :hover{
    outline:0;
  }
`