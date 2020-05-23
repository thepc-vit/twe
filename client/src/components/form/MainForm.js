import React from 'react'
import Input from './Input'
import Button from './Button'

function Form(props) {

    const status = props.status;

    function handleClick(event) {
        props.handleClick(event)
    }
    function redirect() {
        status === "Register" && props.setStatus("Login")
        status === "Login" && props.setStatus("Register")
    }
    function handleChange(event) {
        // const [name, value] = event.target;
    }
    return (
        <div className="col-sm-4 col-md-6">
            <form>
                <h1 className="form-header">{status}</h1>
                {status === "Welcome" ?
                    <div>
                        <Button classAdd={"btn-outline"} name="Register" handleClick={handleClick} />
                        <Button classAdd={"btn-solid"} name="Login" handleClick={handleClick} />
                    </div>
                    :
                    status === "Register" ?
                        <div>
                            <Input type="input" name="fullName" placeholder="First name" onChange={handleChange} />
                            <Input type="input" name="email" placeholder="Email address" />
                            <Input type="password" name="pass" placeholder="Password" />
                            <Input type="password" name="cnfPass" placeholder="Confirm Password" />
                            <Button classAdd={"btn-solid"} name={status} handleClick={handleClick} link="dashboard" />
                            <p class="small" onClick={redirect}> Have an account? </p>
                        </div>
                        :
                        <div>
                            <Input type="input" name="email" placeholder="Email address" />
                            <Input type="password" name="pass" placeholder="Password" />
                            <Button classAdd={"btn-solid"} name={status} handleClick={handleClick} link="dashboard" />
                            <p class="small" onClick={redirect}> Don't have an account? </p>
                        </div>
                }
            </form>
        </div>
    )
}

export default Form