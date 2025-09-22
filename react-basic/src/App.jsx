import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Router>
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                </Routes>
                <Footer /> {/* Footer 고정 */}
            </Router>
        </ThemeProvider>
    );
}

export default App;
