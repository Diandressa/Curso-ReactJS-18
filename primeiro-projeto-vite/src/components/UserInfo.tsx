import { UserAge } from "./UserAge"
import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserRoles } from "./UserRoles"

export const UserInfo = () => {
    return(
        <>
            <UserAvatar src="https://picsum.photos/seed/picsum/200/300"/>
            <UserName name="Andressa"/>
            <UserEmail email="email@email.com"/>
            <UserAge age={99}/>
            <UserRoles roles={[{id:1, title:'CEO'}]}/>
        </>
    )
}