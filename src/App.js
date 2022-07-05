import React, { useState, useEffect, useContext, createContext } from 'react';
import { GlobalStyles } from "./components/styles/Global.styled";
import { Header } from "./components/styles/Header.styled";
import { Footer } from "./components/styles/Footer.styled";
import Quotes from "./components/Quotes";
import { ThemeContainer, ThemeButton, } from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import { light, dark, blue, green, brown, pink, } from "./components/styles/Theme.styled";




export const ThemePreferenceContext = React.createContext()


const App = () => {

    const [selectedTheme, setSelectedTheme] = useState(light);

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem("current-theme", JSON.stringify(theme));
    };

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
        if (currentTheme) {
            setSelectedTheme(currentTheme);
        }
    }, []);


    return (
        <ThemePreferenceContext.Provider value={{ selectedTheme, handleThemeChange }}>
            <ThemeProvider theme={selectedTheme} >
                <div className="App">
                    <GlobalStyles />
                    <Header>Game of Thrones Quotes</Header>

                    <ThemeContainer>
                        <span>Themes: </span>
                        <ThemeButton
                            className={`light ${selectedTheme === light ? "active" : ""}`}
                            onClick={() => handleThemeChange(light)}></ThemeButton>
                        <ThemeButton
                            className={`dark ${selectedTheme === dark ? "active" : ""}`}
                            onClick={() => handleThemeChange(dark)}></ThemeButton>
                        <ThemeButton
                            className={`blue ${selectedTheme === blue ? "active" : ""}`}
                            onClick={() => handleThemeChange(blue)}></ThemeButton>
                        <ThemeButton
                            className={`green ${selectedTheme === green ? "active" : ""}`}
                            onClick={() => handleThemeChange(green)}></ThemeButton>
                        <ThemeButton
                            className={`brown ${selectedTheme === brown ? "active" : ""}`}
                            onClick={() => handleThemeChange(brown)}></ThemeButton>
                        <ThemeButton
                            className={`pink ${selectedTheme === pink ? "active" : ""}`}
                            onClick={() => handleThemeChange(pink)}></ThemeButton>
                    </ThemeContainer>

                    <Quotes />

                    <Footer>
                        <p>
                            Made with love by Gabe
                        </p>
                    </Footer>
                </div >
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    );
}

export default App;