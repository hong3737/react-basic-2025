import { Global, css, useTheme } from "@emotion/react";
import "normalize.css";
import "./reset.css";

export const GlobalStyles = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
                body {
                    font-family: ${theme.fonts.main};
                    font-size: 62.5%;
                    background-color: ${theme.colors.background};
                    color: ${theme.colors.text};
                }
            `}
        />
    );
};
