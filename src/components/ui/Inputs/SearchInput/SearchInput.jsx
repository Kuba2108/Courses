
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '../../../../assets/svg/SearchIcon.svg'
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useTranslation } from 'react-i18next';

export default function SearchInput() {
  const { t, i18n } = useTranslation();

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400,
      border:'0.5px solid #ccc',
      boxShadow: 0,
      borderRadius: 2
    }}
    >
      {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      </IconButton> */}
      <InputBase
      placeholder={t("Search")}
        sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            p: "8px 20px",
            display: "flex",
            alignItems: "start",
            width: 300, 
        }}
      />
        <img src={SearchIcon} />
    </Paper>
  )
}