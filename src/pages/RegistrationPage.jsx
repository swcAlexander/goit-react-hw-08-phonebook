import React from "react";
import { toast } from "react-toastify";
import { signUp } from "servises/authorization";
import { Container } from "components/Container/Container";
import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        signUp(newUser).then(() => { toast.success('Created'); navigate('/pages/Login')}).catch((error)=> toast.error(error.message))
        // signUp(newUser).then((responce) => console.log(responce.data) )


    }
    return (
        <Container>
            <h1 className="text">Sign Up</h1>
            <form className="registrationForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exsampleInputName">Name</label>
                    <input type="text"
                        name="name"
                        typeof="name"
                        className="form-control"
                        id="exsampleInputName"

                    />
                </div>
                <div>
                    <label htmlFor="exsampleInputEmail">Email address</label>
                    <input type="text"
                        name="email"
                        typeof="email"
                        className="form-control"
                        id="exsampleInputEmail"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">We'll never share you email with anyone else</div>
                </div>
                <div>
                    <label htmlFor="exsampleInputPassword">Password</label>
                    <input type="text"
                        name="password"
                        typeof="password"
                        className="form-control"
                        id="exsampleInputPassword"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </Container>
    )
}

export default RegistrationPage