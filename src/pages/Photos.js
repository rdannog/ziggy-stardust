import React from "react";
import * as S from "../styles/photosPage";
import { Settings } from "../settings/index";
import { Menu } from "../components/IndexPage/header/menu";
import { PhotoGallery} from "../components/PhotosPage/index"

export default function Photos() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu/>
      <PhotoGallery/>
    </div>
  )
}