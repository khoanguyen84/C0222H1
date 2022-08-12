import React, { useState } from "react";
function Register() {
    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    // const [age, setAge] = useState(0);

    // const staff = {
    //     fullname : fullname,
    //     email : email,
    //     age : age
    // }
    const [staff, setStaff] = useState({
        fullname: '',
        email: '',
        age : 0
    })
    const handleRegister = function(){
        // collection data
        // call API
    }

    const handleInput = (e) => setStaff({
        ...staff,
        [e.target.name] : e.target.value
    })
    console.log(staff);
    return (
        <div>
            <form onSubmit={handleRegister}>
                <table>
                    <tbody>
                        <tr key="1">
                            <td>Fullname</td>
                            <td>
                                <input 
                                    type="text" 
                                    name="fullname" 
                                    onChange={handleInput}
                                    // onChange={(e) => setFullname(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr key="2">
                            <td>Email</td>
                            <td>
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange={handleInput}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    />
                            </td>
                        </tr>
                        <tr key="3">
                            <td>Age</td>
                            <td>
                                <input 
                                    type="number" 
                                    name="age" 
                                    onChange={handleInput}
                                    // onChange={(e) => setAge(e.target.value)}
                                    />
                            </td>
                        </tr>
                        <tr key="4">
                            <td colSpan={2}>
                                <button type="submit">Register</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Register;