import { Link } from "react-router-dom";


const PostUserData = () => {


    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        // console.log(email, name, pass);
        const myData = {
            name,
            email,
            pass
        }
        console.log(myData);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert('user added successfully')
                }
            })
    }


    return (
        <div className="max-w-screen-xl mx-auto mt-12 flex justify-center">

            <div className="bg-gray-100 p-5 w-2/4 flex justify-center">
                <form className="px-5 w-full" onSubmit={handleCreateUser}>
                    <Link to={"/users"}>
                    <h2 className="text-3xl font-semibold text-center py-1 mb-5 bg-sky-100">User</h2>
                    </Link>
                    <input className="w-full py-1 pl-3" type="text" name="name" id="" placeholder="Enter Your Name" />
                    <br />
                    <br />
                    <input className="w-full py-1 pl-3" type="email" name="email" id="" placeholder=" Enter Your Email" />
                    <br />
                    <br />
                    <input className="w-full py-1 pl-3" type="password" name="pass" id="" placeholder="Enter Your Password" />
                    <br />
                    <div className="flex justify-center py-3">
                        <button className="py-1 px-4 bg-lime-400 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostUserData;