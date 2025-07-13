import { UserAge } from "./UserAge"
import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserRoles } from "./UserRoles"

type Props = {
    name:string,
    email:string,
    age:number,
    avatar:string,
    roles: {id:number, title:string}[]
}

export const UserInfo = (props:Props) => {
    return(
        <>
            <UserAvatar src={props.avatar} />
            <UserName name={props.name}/>
            <UserEmail email={props.email}/>
            <UserAge age={props.age}/>
            <UserRoles roles={props.roles}/>
        </>
    )
}

//https://picsum.photos/seed/picsum/200/300