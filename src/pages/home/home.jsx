import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{width:"50%" ,}}>
      <Paper elevation={3}  className="paper-items">
        <Typography variant="h6"> GYM </Typography>
        <Typography variant="h6"> 100$ </Typography>

        <IconButton className="close-paper">
          <Close  />
        </IconButton>
      </Paper>

      <Paper elevation={3}  className="paper-items">
        <Typography variant="h6"> GYM </Typography>
        <Typography variant="h6"> 100$ </Typography>

        <IconButton className="close-paper">
          <Close  />
        </IconButton>
      </Paper>

      <Typography variant="h4" color={theme.palette.favColor.main}>hhhshh</Typography>
    </Box>
  );
};

export default Home;
