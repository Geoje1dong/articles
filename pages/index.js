import React, { Component } from 'react'
import content from '../content/blog.md';
import Link from 'next/link'
import styled, {createGlobalStyle} from 'styled-components'
import Nav from '../components/nav'

export default class Home extends Component {  
  render() {  
    let { html , attributes:{ title, articles } } = content;
    let sortName = articles.sort(function(a,b){
      return b.id - a.id;
    })
    return (
      <>
      <GlobalStyle />
      <StyledWrap>
        <Nav />
        <ArticleWrap>
          {/* <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/> */}
          { articles.map((article, index) => (
            <ArticleBox  key={index} background={`static/img/${article.img}`}>
              <Link href={`${article.link}`}><a target="_blank">
                <ArticleText>
                  <h2>{article.name}</h2>
                  <p>{article.description}</p>
                </ArticleText>
                <BlindText>{article.name} 링크 바로가기</BlindText>
              </a></Link>
            </ArticleBox>
          ))}
        </ArticleWrap>
      </StyledWrap>
      </>
    )
  }
}

const ArticleWrap = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:rgba(0, 0, 0, 0.04);
    font-family: 'Noto Sans KR', sans-serif;
  }
  ul {
    margin:0;
    padding:0;
    list-style:none;
  }
`;

const ArticleBox = styled.div`
  cursor:pointer;
  position:relative;
  width:100%;
  max-height:200px;
  border-radius:10px;
  background:#000;
  overflow:hidden;
  >a {
    display:block;
    padding: 0;
    margin: 0;
    position:relative;
    width:100%;
    height:200px;
    line-height: 0em;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    >img{width:100%;} 
    &:after{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-image:linear-gradient(0deg,rgba(0,0,0,0.6) 0,transparent 60%);
      z-index:1;
    }
  }
`

const ArticleText = styled.div`
  position:absolute;
  z-index:2;
  padding:10px 20px;
  bottom:0;
  line-height:1.5em;
  color:#fff;
  >h2{
    margin:0;
    font-weight:700;
    font-size:20px;
  }
  > p{
    margin-top:8px;
    font-size:14px;
    font-weight:300;
    overflow: hidden; 
    text-overflow: ellipsis; 
    /* 여러 줄 자르기 추가 스타일 */ 
    white-space: normal; 
    line-height: 1.4em; 
    height: 2.8em;
  }
`

const BlindText = styled.span`
  text-indent:-9999px;
  position:absolute;
`

const StyledWrap = styled.div`
  padding:20px 20px 20px;
  background:#fff;
  max-width:1024px;
  width:100%;
  height:100%;
  margin:0 auto;
  h2{margin-top:0;}
  box-sizing:border-box;
`