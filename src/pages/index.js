import React from "react";
import * as S from "../styles/indexPage";
import { Settings } from "../settings/index";
import { Header } from "../components/IndexPage/header/index";
import { Main } from "../components/IndexPage/main/index";
import { Footer } from "../components/IndexPage/footer/index";

export default function Index() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}