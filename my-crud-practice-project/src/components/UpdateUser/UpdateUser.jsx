import { useLoaderData } from "react-router-dom";



const UpdateUser = () => {

    const singleData= useLoaderData();
    console.log(singleData);


    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        // console.log(email, name, pass);
        const updateData = {
            name,
            email,
            pass
        }
        console.log(updateData);

        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated successfully')
            }
        })

    }



    return (
        <div>
            <h2>Update User</h2>
            <div className="max-w-screen-xl mx-auto mt-12 flex justify-center">

                <div className="bg-gray-100 p-5 w-2/4 flex justify-center">
                    <form className="px-5 w-full" onSubmit={handleCreateUser}>

                        <h2 className="text-3xl font-semibold text-center py-1 mb-5 bg-sky-100">User Update</h2>

                        <input className="w-full py-1 pl-3" type="text" name="name" id="" 
                        defaultValue={singleData?.name}
                        placeholder="Enter Your Name" />
                        <br />
                        <br />
                        <input className="w-full py-1 pl-3" type="email" name="email" id="" 
                        defaultValue={singleData?.email}
                        placeholder=" Enter Your Email" />
                        <br />
                        <br />
                        <input className="w-full py-1 pl-3" type="password" name="pass" id="" 
                        defaultValue={singleData?.pass}
                        placeholder="Enter Your Password" />
                        <br />
                        <div className="flex justify-center py-3">
                            <button className="py-1 px-4 bg-lime-400 rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;