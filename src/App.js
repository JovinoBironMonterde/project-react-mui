import { ColorModeContext, useMode } from "./thems";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/scenes/global/Topbar";
import Sidebar from "./components/scenes/global/Sidebar";
import Dashboard from "./components/scenes/dashboard/Dashboard";
// import Invoice from "./components/scenes/dashboard/Invoice";
// import Contacts from "./components/scenes/dashboard/Contacts";
// import Bar from "./components/scenes/dashboard/Bar";
// import Form from "./components/scenes/dashboard/Form";
// import Line from "./components/scenes/dashboard/Line";
// import Pie from "./components/scenes/dashboard/Pie";
// import FAQ from "./components/scenes/dashboard/Faq";
// import Geography from "./components/scenes/dashboard/Geography";
// import Calendar from "./components/scenes/dashboard/Calendar";
import Team from "./components/scenes/global/team";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider vlaue={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Team" element={<Team />} />
              {/* <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Invoice" element={<Invoice />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Line" element={<Line />} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/Faq" element={<FAQ />} />
              <Route path="/Geaography" element={<Geography />} />
              <Route path="/Calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
