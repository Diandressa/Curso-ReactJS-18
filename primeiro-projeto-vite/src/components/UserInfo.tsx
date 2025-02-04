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