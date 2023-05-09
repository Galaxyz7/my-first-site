 import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Home from "./scenes/home";
import Writeups from "./scenes/writeups";
import FAQ from "./scenes/faq";
import PostA from "./scenes/writeups/post_a";
//import Team from "./scenes/team";


function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        {<Routes>
                            <Route path="/" element={<Home />} />
                            
                            <Route path="/writeups" element={<Writeups />} />
                            <Route path="/writeups/apache_2_with_ssl" element={<PostA />} />

                            <Route path="/faq" element={<FAQ />} />
                        </Routes>}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider> 
    );
}

export default App;

/**/