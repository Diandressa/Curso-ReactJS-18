import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Input } from "./components/input";

const App = () => {
  return(
      <ThemeProvider theme={theme}>
        <Input/>
      </ThemeProvider>
    )
}

export default App;
