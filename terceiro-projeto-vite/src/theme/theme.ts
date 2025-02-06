const theme = {
    primary: 'yellow',
    secondary: 'green',
    sizeSM: '10'
}

//ja esporta os tipos da const theme sem eu precisar digitar para cada um no compnente
export type ThemeType = typeof theme;
export default theme;