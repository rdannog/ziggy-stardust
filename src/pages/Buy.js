import React from "react";
import * as S from "../styles/indexPage";
import { Settings } from "../settings/index";
import { Menu } from "../components/IndexPage/header/menu";
import { Footer } from "../components/IndexPage/footer/index";

export default function Buy() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu/>
      <Footer/>
    </div>
  )
}