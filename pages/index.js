import React, { Component } from 'react'
import content from '../content/blog.md';
import Link from 'next/link'

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, articles } } = content;
    return (
      <article>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { articles.map((article, index) => (
                  <li key={index}>
                    <h2>{article.name}</h2>
                    <p>{article.description}</p>
                    <p>
                      <img src={`/${article.img}`} />
                    </p>
                    <p>{article.date}</p>
                    <Link href={`${article.link}`}>
                      <a target="_blank">링크 바로가기</a>
                    </Link>
                    <a href={`${article.link}`} target="_blank">링크2 바로가기</a>
                  </li>
              ))}
          </ul>
      </article>
    )
  }
}
