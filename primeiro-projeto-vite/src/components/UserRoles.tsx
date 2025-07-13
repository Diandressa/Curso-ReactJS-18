export const UserRoles = () => {
    const roles = ['CEO', 'CTO','admin'];
    
    return(
        <ul>
            {roles.map((value, key) => (
                <li key={key}>
                    {value}
                </li>
            ))}
        </ul>
    )
}