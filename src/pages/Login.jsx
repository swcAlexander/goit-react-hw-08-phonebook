import React from "react";
import { toast } from "react-toastify";
import { login } from "servises/authorization";
import { Container } from "components/Container/Container";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        login(user).then((data)=> console.log(data)).catch((error)=> toast.error(error.message))


    }
    return (
        <Container>
            <h1 className="text">Login</h1>
            <form className="login" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exsampleInputEmail">Email address</label>
                    <input type="text"
                        name="email"
                        typeof="email"
                        className="form-control"
                        id="exsampleInputEmail"
                    />
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

export default Login;