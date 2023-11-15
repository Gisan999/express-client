import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUser = () => {

    const users = useLoaderData();
    const [updatedUser, setUpdatedUser] = useState(users);
    console.log(users);

    const handleDelete = (id) => {
        console.log('btn clicked', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                }
                const remaining = updatedUser.filter(item => item._id !== id);
                setUpdatedUser(remaining)
            })
    }

  


    return (
        <div>
            <h2 className="text-3xl">User: {users.length}</h2>
            <div>
                {
                    updatedUser?.map(user => <div key={user._id}>

                        <h2 className="text-2xl font-semibold">{user.name} <span onClick={() => handleDelete(user._id)} className="text-red-500 font-bold pl-3">X</span>
                        <Link to={`/users/${user._id}`}>
                        <span className="font-bold text-yellow-500 pl-5">U</span>
                        </Link>
                        </h2>

                    </div>)
                }
            </div>
        </div>
    );
};

export default DisplayUser;