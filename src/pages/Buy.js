import React from "react";
import * as S from "../components/styles/style";
import { Settings } from "../settings/index";
import { Menu } from "../components/IndexPage/header/menu";
import { Footer } from "../components/IndexPage/footer/index";
import { BuyIndex } from "../components/BuyPage/index";

export default function Buy() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu/>
      <BuyIndex/>
      <Footer/>
    </div>
  )
}