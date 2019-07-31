import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, Search } from 'react-feather';

export default class Menu extends React.Component{
  render(){
    return(
      <MenuContainer>
        <Button onClick={this.props.closeClick}><ChevronLeft /></Button>
        <Input>
          <input placeholder="검색어를 입력해 주세요"/>
          <Search />
        </Input>
      </MenuContainer>
    )
  }
}

const Recommendation = styled.div`
  margin-top:40px;
  >h2{
    font-size:18px;
    font-weight:300;
  }
`

const Input = styled.div`
  position:relative;
  width:100%;
  border-bottom:1px solid #1f1f1f;
  >input{
    width:100%;
    line-height:1.5em;
    padding: 4px 12px;
    box-sizing:border-box;
    margin-bottom:8px;
    font-size:18px;
    font-weight:300;
    border:0;
    :focus, :hover{
      outline:0;
    }
  }
  >svg{
    position:absolute;
    top:9px;
    right:0;
    width:auto;
    height:20px;
  }
`

const MenuContainer = styled.div`
  max-width:400px;
  width:100%;
  box-sizing:border-box;
  background:#fff;
  position:fixed;
  padding:60px 20px;
  right:0;
  bottom:0;
  top:0;
`

const Button = styled.button`
  position:absolute;
  top:20px;
  left:20px;
  cursor:pointer;
  background:none;
  border:0;
  >svg{
    height:20px;
    width:auto;
  }
  :focus, :hover{
    outline:0;
  }
`