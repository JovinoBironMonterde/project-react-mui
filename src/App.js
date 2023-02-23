import { ColorModeContext, useMode } from "./thems";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/scenes/global/Topbar";
import { Sidebar } from "react-pro-sidebar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider vlaue={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
