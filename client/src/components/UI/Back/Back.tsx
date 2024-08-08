import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
const Back = () => {
  const navigate = useNavigate();

  return <ArrowBackIosIcon style={{cursor : "pointer"}} onClick={() => navigate(-1)} />;
};

export default Back;
