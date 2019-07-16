import React, { Component } from 'react'
import content from '../content/blog.md';
import Link from 'next/link'
import styled, {createGlobalStyle} from 'styled-components'
import Nav from '../components/nav'

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, articles } } = content;
    return (
      <>
      <GlobalStyle />
      <StyledWrap>
        <Nav />
        <ArticleWrap>
          {/* <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/> */}
          { articles.map((article, index) => (
            <ArticleBox  key={index}>
              <Link href={`${article.link}`}><a target="_blank">
                <img src={`static/img/${article.img}`} alt={`${article.name} ${article.description} 이미지`} />
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 800px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px){
    grid-template-columns: repeat(1, 1fr);
  }
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
  border-radius:10px;
  background:#000;
  overflow:hidden;
  >a {
    display:block;
    padding: 0;
    margin: 0;
    position:relative;
    width:100%;
    height:100%;
    line-height: 0em;
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
  margin:0 auto;
  h2{margin-top:0;}
  box-sizing:border-box;
`