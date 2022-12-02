import React, { useContext } from 'react';
import { ReactElement } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = React.createContext('light' as Theme);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
