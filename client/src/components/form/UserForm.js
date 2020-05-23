import React from 'react'
import Form from './MainForm'
import Illustration from './Illustration'
// import axios from 'axios'

function UserForm(props) {
    const [status, setStatus] = React.useState("Welcome");
    // const [test, setTest] = React.useState({});

    // React.useEffect(() => {
    //     axios.get('http://localhost:5000/api/client')
    //         .then(res => setTest(res.data))
    // }, [])


    function handleClick(event) {
        const name = event.target.name;
        name === "register-btn" ? setStatus("Register") : setStatus("Login")
        event.preventDefault()
    }
    function handleInput(event) {
        console.log(event.target.name);

        event.preventDefault();
    }

    return (
        <div className="Form">
            <div className="Form-box">
                <div className="row">
                    <Illustration
                        status={status}
                    />
                    <Form
                        status={status}
                        handleClick={handleClick}
                        handleInput={handleInput}
                        setStatus={setStatus}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserForm