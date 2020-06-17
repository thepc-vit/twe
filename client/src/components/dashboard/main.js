import React from 'react'
import Cards from './cards'
import SubmitForm from './submitForm'

function Main(props) {

    const [greeting, setGreeting] = React.useState("Hello")
    const page = props.pageName

    React.useEffect(() => {
        const hours = new Date().getHours()

        if (hours > 0 && hours < 12) {
            setGreeting("Good Morning,")
        } else if (hours >= 12 && hours < 18) {
            setGreeting("Good Afternoon,")
        } else if (hours >= 18 && hours <= 23) {
            setGreeting("Good Evening,")
        }
    }, [])

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                <h1> {greeting} Random Dude!</h1>
            </div>
            {page === "Main" ? <Cards /> : <SubmitForm />}


        </main>
    )
}


export default Main