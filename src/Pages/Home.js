import React from 'react'

function Home() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const fetchUsers = async () => {
            const getAllUsers = await fetch(`http://localhost:3001/api/users`);
            const jsonGetAllUsers = await getAllUsers.json();
            setUsers(jsonGetAllUsers)
            console.log(jsonGetAllUsers);
        };

        fetchUsers();
    }, []);


        console.log(users);

    return (
        <div>{users[1].username}</div>
    )
}

export default Home