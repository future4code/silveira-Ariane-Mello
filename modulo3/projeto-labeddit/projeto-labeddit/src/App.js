import React from "react";
// import { ThemeProvider } from '@material-ui/styles';
import Router from "./routes/Router";

const App = () => {
  return (
    <div>
    {/* <ThemeProvider theme={theme}> */}
      <Router/>
    {/* </ThemeProvider> */}
    </div>
  )
}

export default App
