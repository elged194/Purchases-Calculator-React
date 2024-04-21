import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const theme = useTheme();

  const [myData, setmyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmyData(data));
  }, []);

  let subTotale = 0;
  return (
    <Box sx={{ width: "50%" }} component={"main"}>

      {myData.map((e) => {
        subTotale += e.prise;
        return (
          <Paper elevation={3} className="paper-items" key={e.id}>
            <Typography variant="h6"> {e.title.toUpperCase()} </Typography>
            <Typography variant="h6"> {e.prise}$ </Typography>

            <IconButton
              className="close-paper"
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${e.id}`, {
                  method: "DELETE",
                });
                const newArr = myData.filter((item) => {
                  return item.id !== e.id;
                });
                setmyData(newArr);
              }}
            >
              <Close />
            </IconButton>
          </Paper>
        );
      })}

      <Typography
        mt="15px"
        textAlign="center"
        variant="h4"
        color={theme.palette.favColor.main}
      >
        Sub Totale {subTotale}$
      </Typography>

    </Box>
  );
};

export default Home;
