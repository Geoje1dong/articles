import React from 'react'
import styled from 'styled-components'
import { Inbox, BarChart2 } from 'react-feather';
import Menu from './menu'

export default class Nav extends React.Component{
  
  state = {
    menuModal: false
  }

  handleclick = () =>{
    this.setState({ menuModal: !this.state.menuModal });
    window.scrollTo(0,0);
  }

  render(){
    return(
      <>
      <StyledNavBar>
        <span><Inbox  /></span>
        {/* <Button onClick={this.handleclick}>
          <BarChart2 />
        </Button> */}
        {this.state.menuModal && <Menu closeClick={this.handleclick}/>}
      </StyledNavBar>
      </>
    )
  }
}

const StyledNavBar = styled.div`
  display:flex;
  margin-bottom:10px;
  position:relative;
  z-index:10;
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