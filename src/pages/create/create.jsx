import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { Send } from "@mui/icons-material";
import DriveFileRenameOutlineIcon  from '@mui/icons-material/DriveFileRenameOutline';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[700]),
  backgroundColor: theme.palette.primary.light  ,
  "&:hover": {
    backgroundColor: lightGreen[800],
  },
}));

const Create = () => {
  return (
    <Box sx={{ width: {xs:"95%" , sm:"80%" ,md:"60%"} }} component={"form"}>
      <TextField
        fullWidth={true}
        color="success"
        label="With normal TextField"
        sx={{ m:1 , ml:0}}
        InputProps={{
          startAdornment: <InputAdornment position="start"><DriveFileRenameOutlineIcon/> </InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        fullWidth={true}
        color="success"
        label="With normal TextField"
        sx={{ m: 1 , ml:0}}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      {/* <Button variant="outlined">Outlined</Button> */}

      <ColorButton variant="contained">Submit <Send sx={{mt:"-2px" , ml:"10px" , fontSize:"20px"}} /> </ColorButton>
    </Box>
  );
};

export default Create;
