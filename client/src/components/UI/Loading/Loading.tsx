import { CircularProgress } from "@mui/material";
import { color } from "../../../assets/colors/colors";
import * as styled from "./style.style";

const Loading = () => {
  return (
    <styled.Loading>
      <CircularProgress
        sx={{ "& circle": { color: color.blue }, transform: "scale(1.5)" }}
      />
    </styled.Loading>
  );
};

export default Loading;
