import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Home = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const firstText = 'Hello, Welcome to My Website'

  return (
    <div style={{
      display: 'block',
      width: '80%',
      margin: '0 auto',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>
        {firstText}
      </h1>
    </div>
    )
}

export default Home;