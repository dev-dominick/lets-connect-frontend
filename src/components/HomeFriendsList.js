import React from 'react'

function HomeFriendsList() {
    const [users, setUsers] = React.useState([])

React.useEffect(() => {
    //create a controller
    let controller = new AbortController();

    (async () => {

      try {
        const fetchUsers = await fetch(`http://localhost:3001/api/users`,
          {
            // connect the controller with the fetch request
            signal: controller.signal,
          },
        );
        // handle success
        setUsers(await fetchUsers.json());
        // console.log(users);
        // remove the controller
        controller = null;
      } catch (e) {
        // Handle the error
        console.log('error');
      }
    })();
    //aborts the request when the component umounts
    return () => controller?.abort();
},[]);

console.log(users);

  return (
    <div>
        {users.map(user =>
            <div key={user.id}>
                <h1>{user.username}</h1>
            </div>
            )}
        {/* { users ? users[0].username : "Loading"  } */}
    </div>
  )
}

export default HomeFriendsList