# Curso React Udemy
  Curso da Udemy

## Seção 3

### Aula 11 - Iniciando projeto CRA

npx executa pacotes
npm - gerencia/baixa pacotes

>CRA - Create React App

npx create-react-app nome-projeto-cra --template typescript

cd para entrar no projeto

`npm run start`

erro instala o npm, checar npm -v

digitar Set-ExecutionPolicy RemoteSigned

no prompt (executar powersheel como admin)

### Aula 12 - Iniciando projeto vite

npm create vite@latest
react
typescript + SWC -> mais recente
cd na pasta do projeto
npm install ou npm i
npm run dev

## Seção 4

### Aula 14 - Outras formas de criar componentes 

#### Com variável
No app.tsx

```
const App = () => {
  return(
    <div>
      <h1>Componente com function</h1>
    </div>
  )
}

export default App;
```

#### Com função

```
function App(){
  return(
    <div>
      <h1>Componente com func</h1>
    </div>
  )
}

export default App;
```

#### Modo antigo com render

maneira antiga com funções de rastreio, rastreia o ciclo de vida

```
import React from "react";

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Componente com class</h1>
      </div>
    )
  }
}
```

#### Hooks rastreia atualmente

> usando useEffect e useState, monitora quando o componente nasce (renderiza) e morre ('desrenderizado')

### Aula 15 - Importando e exportando componentes

> Export component por defaulf em linha:

#### Exportar default, a função não é nomeada

```
export default() => { 
    return(
        <h4>Meu nome é: Andressa</h4>
    )
}

```

#### Export em linha

```
export const UserName = () => { 
    return(
        <h4>Meu nome é: Andressa</h4>
    )
}

```

#### Export com um nome no final

```
const UserName = () => {
    return(
        <h4>Meu nome é: Andressa</h4>
    )
}

const UserEmail = () => {
    return(
        <h4>Meu email é: email@email.com</h4>
    )
}

const UserAge = () => {
    return(
        <h4>Minha idade é: 28</h4>
    )
}

//exportar a função como chaves
export { UserName, UserEmail };
export default UserAge;
```

#### Importa no App.tsx

>pasta components fica no src \
import UserAge, { UserName, UserEmail} from './components/UserName'

>alias (pseudonimo) = 'as' renomeia a funcão importada\
import { UserName as UserN, UserEmail as UserE} from './UserName'

```
import UserAge, { UserName, UserEmail} from './components/UserName';
import { UserName as UserN, UserEmail as UserE} from './UserName';

const App = () => {
  return (
    <div>
      <h1>Meu primeiro componente de usuário</h1>

      <UserName />
      <UserEmail />
      <UserAge />
    </div>
  )
}

export default App;
```

### Aula 16 - Como organizar vários componentes

Cria os componente dentro de uma pasta 
  
export como default cada componente

Arquivo UserName.tsx 
```
export const UserName = () => {
  return(
      <h4>Meu nome é: Andressa</h4>
  )
}
```

Cria um arquivo UserInfo.tsx dentro da pasta Components e importa todos os componentes do conjunto

```
import { UserAge } from "./UserAge"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserNAme"

Exporta o componente com o fragment, que encapsula os outros componentes

export const UserInfo = () => {
    return(
        //<Fragment> or <> para englobar os outros componentes
        <> 
            <UserName />
            <UserEmail />
            <UserAge />
        </>
    )
}
```

** A função só exporta um componente por vez, por isso usamos o fragment
**Com o fragment podemos encapsular componentes dentro de um componente pai

No App.tsx importa o UserInfo

```
import { UserInfo } from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>Meu primeiro componente de usuário</h1>

      <UserInfo />
    </div>
  )
}

export default App;
```

### Aula 17 - Regras gerais do JSX 

```
export const UserAvatar = () => {
    return(
        <img 
            src="https://picsum.photos/seed/picsum/200/300" 
            alt="Imagem avatar" 
            onClick={() => alert('clicou')}
        /> //fechar todas as tags
    )
}

```

### Aula 18 - JSX variáveis funções e objetos

  export const UserName = () => {
    //let name = 'twinkie winki' variavel

    //let names = {nome1: 'twinkie winki', nome2: 'telettubies'} obj

    let name = 'twinkie winki'

    /*
    const formatName = (value: string) => {
        return value.toUpperCase()
    }
    */

    //const formatName = (value: string) => value.toUpperCase()

    return(
        //<h4>Meu nome é: { names.nome1 }</h4>

        //<h4>Meu nome é: { formatName(name) }</h4>

        <h4>Meu nome é: { name.toUpperCase() }</h4>
    )
  }

-- aula 19 JSX Renderização Condicional --

  Em App.tsx

  import { UserInfo } from "./components/UserInfo";

  const App = () => {
    const isLogged = false
    /*
    if(isLogged){
      return (
        <div>
          <h1>Meu primeiro componente de usuário</h1>
    
          <UserInfo />
        </div>
      )
    } 

    return(
      <h1>Não está logado</h1>
    )
  */

  //operador de atribuição lógica && -> se a condição for true renderiza o componente
  /*
    return (
      <div>
        <h1>Meu primeiro componente de usuário</h1>
        { isLogged && <UserInfo />} 
      </div>
    )
  */

  //operador ternário
  /*
    return (
      <div>
        <h1>
          {isLogged ? 'Meu primeiro componente de usuário' : 'Não está logado'}
        </h1>

        { isLogged && <UserInfo />} 
      </div>
    )
  */

    //Se não está logado dá o return que interrompe o código ali
    if(!isLogged) {
      return;
      //or return null
    }

    return (
      <div>
        <h1>
          {isLogged ? 'Meu primeiro componente de usuário' : 'Não está logado'}
        </h1>

        { isLogged && <UserInfo />} 
      </div>
    )

  }

  export default App;

-- aula 20 JSX Renderizando listas --

  export const UserRoles = () => {
    //const roles = ['CEO', 'CTO', 'admin']

    const roles = [
        {id: 1, title: 'CEO'},
        {id: 2, title: 'CTO'}, 
        {id: 3, title: 'admin'}
    ]

    return(
        /*
        <ul>
            { roles.map((value, key) => (
                <li key={key}>
                    {value}
                </li>
            ))}
        </ul>
        */

        <ul>
            { roles.map(value => (
                <li key={value.id}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
  }
  No App.tsx

  import { UserAge } from "./UserAge"
  import { UserAvatar } from "./UserAvatar"
  import { UserEmail } from "./UserEmail"
  import { UserName } from "./UserName"
  import { UserRoles } from "./UserRoles"

  export const UserInfo = () => {
      return(
          //<Fragment> or <> para englobar os outros componentes
          <> 
              <UserAvatar />
              <UserName />
              <UserEmail />
              <UserAge />
              <UserRoles />
          </>
      )
  }

-- aula 21 JSX Filtrando listas --

  	export const UserRoles = () => {
    const roles = [
        {id: 1, title: 'CEO'},
        {id: 2, title: 'CTO'}, 
        {id: 3, title: 'admin'}
    ]

    //typscript tipamos os parâmetros id e title e o retorne como boleano
    
    //função que filtra string com C
    /*
    const filterRoles = (value: {id: number, title: string}): boolean => {
        //Incluir o C no filtro, verifica no filtro string que incluem C
        return value.title.includes('a')
    } 
    */ 

    /*
    
    //ou podemos usar de forma otimizada
    const filterRoles = (value: {id: number, title: string}): boolean => value.title.includes('a')
    

    //filter precisa retornar true ou false, o value do filter é cada elemento pesquisado
    //então eu mando pra função filter cada elemento pesquisado
    
    const filteredRoles = roles.filter(value => filterRoles(value))
    
    */

    //mais fácil usar o include já no filter em vez de chamar a função

    const filteredRoles = roles.filter(value => value.title.includes('C'))

    // o map percorre os elementos do objeto, precisamos declarar a key no react quando não utilizamos o indice mesmo assim
    return(
        <ul>
            { filteredRoles.map((value, key) => (
                <li key={key}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
  }

-- aula 22 Passando props para um componente --

  UserAge.tsx

    type Props = {
      age: number
    }
    export const UserAge = ({age}: Props) => {
        return(
            <h4>Minha idade é: {age}</h4>
        )
    }

  UserAvatar.tsx

    type Props = {
      src: string
    }
    export const UserAvatar = ({src}: Props) => {
        return(
            <img 
                src={src}
                alt="Imagem avatar" 
                onClick={() => alert('clicou')}
            />
        )
    }

  UserEmail.tsx

    type Props = {
      email: string
    }

    export const UserEmail = ({email} : Props) => {
        return(
            <h4>Meu email é: {email}</h4>
        )
    }

  UserRoles.tsx

    type Props = {
      roles: {id: number, title: string}[]
    }
    export const UserRoles = ({roles}: Props) => {   
        return(
            <ul>
                { roles.map((value, key) => (
                    <li key={key}>
                        {value.title}
                    </li>
                ))}
            </ul>
        )
    }

  UserName.tsx

    /* passar um valor como propriedade da função, no typescript tipamos o valor, aqui é uma string
    export const UserName = ({name}: {name: string}) => {

      return(
          <h4>Meu nome é: { name.toUpperCase() }</h4>
      )
    }
    */

    //Podemos trocar a tipagem com type Props
    /*
    type Props = {
        name: string;
    }

    export const UserName = ({name}: Props) => {

        return(
            <h4>Meu nome é: { name.toUpperCase() }</h4>
        )
    }
    */

    //difinimos como parametro o valor name do tipo props, que é um objeto, e acessamos o name do obj que é uma string
    type Props = {
        name: string;
    }

    export const UserName = ({name}: Props) => {
        
        //varivel obtem o name e atribuie a Props
        //const {name} = props 
        return(
            <h4>Meu nome é: { name }</h4>
        )
    }

  UserInfo.tsx
    import { UserAge } from "./UserAge"
    import { UserAvatar } from "./UserAvatar"
    import { UserEmail } from "./UserEmail"
    import { UserName } from "./UserName"
    import { UserRoles } from "./UserRoles"

    /* manda as propriedades para as props de cada componente
    export const UserInfo = () => {
        return(
            //<Fragment> or <> para englobar os outros componentes
            <> 
                <UserAvatar src="https://www.shutterstock.com/editorial/image-editorial/N7T0M132OeTekf20MTI2MA==/teletubbies---tinky-winky-440nw-5346790bb.jpg"/>
                <UserName name="tinki winki"/>
                <UserEmail email="email@email.com"/>
                <UserAge age={28}/>
                <UserRoles roles={ [{id: 1, title: 'CEO'}] }/>
            </>
        )
    }*/

    //cria props no UserInfo para enviar para App.tsx - Agora enviaremos as propriedades pelo App.tsx
    type Props = {
        name: string;
        email: string;
        age: number;
        avatar: string;
        roles: {id: number, title: string}[]
    }

    export const UserInfo = (props: Props) => {
        return(
            //<Fragment> or <> para englobar os outros componentes
            <> 
                <UserAvatar src={props.avatar} />
                <UserName name={props.name}/>
                <UserEmail email={props.email} />
                <UserAge age={props.age} />
                <UserRoles roles={props.roles} />
            </>
        )
    }

    // A função só exporta um componente por vez, por isso usamos o fragment
    // Com o fragment podemos encapsular componentes dentro de um componente pai

  App.tsx

    import { UserInfo } from "./components/UserInfo";

    const App = () => {
      //Envia na props/atributos as informações que terá nos componentes
      return (
        <div>
          <h1>
            Meu primeiro componente de usuário
          </h1>
          <UserInfo 
            avatar="https://www.shutterstock.com/editorial/image-editorial/N7T0M132OeTekf20MTI2MA==/teletubbies---tinky-winky-440nw-5346790bb.jpg"
            name="tinki winki"
            age={28}
            email="tinki@email.com"
            roles={ [{id: 1, title: "CEO"}] }
          />

    <UserInfo 
            avatar="https://i.pinimg.com/736x/79/50/cd/7950cd8a23edec191c32de7bd7645105.jpg"
            name="gypsy"
            age={20}
            email="gypsy@email.com"
            roles={ [{id: 2, title: "CTO"}] }
          />
        </div>
      )

    }

    export default App;

-- aula 23 Inserindo um default em props --

  USerInfo.tsx
    import { UserAge } from "./UserAge"
    import { UserAvatar } from "./UserAvatar"
    import { UserEmail } from "./UserEmail"
    import { UserName } from "./UserName"
    import { UserRoles } from "./UserRoles"

    type Props = {
        name: string;
        email: string;
        age: number;
        avatar?: string;
        roles: {id: number, title: string}[]
    }

    export const UserInfo = ( {name, email, age, roles, avatar = "https://www.shutterstock.com/editorial/image-editorial/N7T0M132OeTekf20MTI2MA==/teletubbies---tinky-winky-440nw-5346790bb.jpg"} : Props) => {
        return(
            <> 
                <UserAvatar src={avatar} />
                <UserName name={name}/>
                <UserEmail email={email} />
                <UserAge age={age} />
                <UserRoles roles={roles} />
            </>
        )
    }

  App.tsx

    import { UserInfo } from "./components/UserInfo";

    const App = () => {
      //Envia na props/atributos as informações que terá nos componentes
      return (
        <div>
          <h1>
            Meu primeiro componente de usuário
          </h1>
          
          <UserInfo 
            name="tinki winki"
            age={28}
            email="tinki@email.com"
            roles={ [{id: 1, title: "CEO"}] }
          />

          <UserInfo 
            avatar="https://i.pinimg.com/736x/79/50/cd/7950cd8a23edec191c32de7bd7645105.jpg"
            name="gypsy"
            age={20}
            email="gypsy@email.com"
            roles={ [{id: 2, title: "CTO"}] }
          />
        </div>
      )

    }

    export default App;

-- aula 24 Prop children do componente --

  Card.tsx
    import { ReactElement, ReactNode } from "react"

    type Props = {
        //Tipo como um elemento react
        //children: ReactElement

        // Tipo como vários tipos react, não precisa do fragment no app.tsx
        //children: ReactNode

        // para usar elemento vazio ou < Card /> no app.tsx
        children?: ReactNode

        // retorna um JSX somente, array para receber mais de um no app.tsx -> não recomendado
        //children: JSX.Element[]
    }

    export const Card = ({ children } : Props) => {
        return (
            <div style={{border: '1px solid red', width: '100vw', height: '100vh'}}>
                { children }
            </div>
        )
    }

  App.tsx

    import { Card } from "./components/Card";
    import { UserInfo } from "./components/UserInfo";
    import { UserName } from "./components/UserName";

    /*
    const App = () => {
      return (
        <div>
            <Card>
              
                <UserName
                  name="Andressa"
                />
                <h1>Texto</h1>
                <h1>Texto</h1>
                <h1>Texto</h1>
                <h1>Texto</h1>
              
            </Card>
        </div>
      )

    }
    */

    /*
    const App = () => {
      return (
        <div>
            <Card 
              children={<div>Div Prop</div>}
            />
        </div>
      )

    }
    */

    const App = () => {
      return (
        <div>
            <Card>
                <div>Div Children</div>          
            </Card>
        </div>
      )

    }

    export default App;

-- aula 25 O que sao componentes puros e impuros --

  componentes puros não alteram uma variével já existente, é necessário fazer uma copia em outra var pra altera-lo
  ou enviar os valores na props e o componente recebe esse valor

-- aula 26 Como transformar componentes impuros em puros --

  desafios: https://pt-br.react.dev/learn/keeping-components-pure

-- aula 27 O que é StrictMode --

  Nos ajuda a encontrar bugs
  Está no main.tsx
  ele duplica as ações de funções no desenvolvimente somente, ver no inspecionar do navegador
  em produção ele não é execurtado
  usado para perceber erros
