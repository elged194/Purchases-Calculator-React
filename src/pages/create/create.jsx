import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
import { Send } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useState } from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[700]),
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: lightGreen[800],
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [prise, setprise] = useState(0);

  return (
    <Box sx={{ width: { xs: "95%", sm: "80%", md: "60%" } }} component={"form"}>
      <TextField
        onChange={(e)=>{
          settitle(e.target.value)
        }}

        fullWidth={true}
        color="success"
        label="With normal TextField"
        sx={{ m: 1, ml: 0 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveFileRenameOutlineIcon />{" "}
            </InputAdornment>
          ),
        }}
        variant="filled"
      />

      <TextField
      onChange={(e)=>{
        setprise(e.target.value)
      }}

        fullWidth={true}
        color="success"
        label="With normal TextField"
        sx={{ m: 1, ml: 0 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />


      <ColorButton
        variant="contained"
        onClick={() => {
          fetch("http://localhost:3000/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(title, prise),
          })
        }}
      >
        Submit <Send sx={{ mt: "-2px", ml: "10px", fontSize: "20px" }} />{" "}
      </ColorButton>
    </Box>
  );
};

export default Create;
