import { UserAge } from "./UserAge"
import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"

export const UserInfo = () => {
    return(
        <>
            <UserName/>
            <UserEmail/>
            <UserAge/>
            <UserAvatar/>
        </>
    )
}