export const UserRoles = () => {
    const roles = [
        {id: 1, title: 'CEO'}, 
        {id: 2, title: 'CTO'}, 
        {id: 3, title: 'admin'}
    ];
    
    return(
        <ul>
            {roles.map(value => (
                <li key={value.id}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
}