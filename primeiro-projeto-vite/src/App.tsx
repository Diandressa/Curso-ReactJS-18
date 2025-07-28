import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserName } from "./components/UserName";

const App = () => {
  return(
    <div>
      <Card>
        <div>Texto</div>
      </Card>
    </div>
  )
  
}

export default App;

/*
  <Card
    children={<div>Texto</div>}
  />
*/