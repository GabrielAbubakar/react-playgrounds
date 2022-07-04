import { createContext, useState, useEffect } from 'react'
import { light, dark, blue, green, brown, pink, } from "../components/styles/Theme.styled";


export const CustomThemeContext = createContext();


const CustomThemeProvider = ({ children }) => {

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
        <CustomThemeContext.Provider value={{ selectedTheme, handleThemeChange, setSelectedTheme }}>
            {children}
        </CustomThemeContext.Provider>
    )
}

export default CustomThemeProvider
