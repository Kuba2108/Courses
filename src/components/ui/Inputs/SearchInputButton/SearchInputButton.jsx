import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useTranslation } from "react-i18next";
import SearchIconBlack from "../../../../assets/svg/SearchIconBlack.svg";

export default function SearchInputButton() {
  const { t } = useTranslation();

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 0px",
        display: "flex",
        alignItems: "center",
        width: 610,
        height: 80,
        border: '0.5px solid #ccc',
        boxShadow: 0,
        borderRadius: 2,
        margin: 0
      }}
    >
      <img src={SearchIconBlack} alt="Search Icon" />
      <InputBase
        placeholder={t("Type in the course you want to learn")}
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          p: "8px 0px",
          display: "flex",
          alignItems: "center",
          width: 350,
        }}
      />
      <button className='sign_up__button'>{t("Search")}</button>
    </Paper>
  )
}
