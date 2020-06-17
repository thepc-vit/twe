import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Main from './main'

function Dashboard(props) {

    document.title = "Dashboard";
    const [page, setPage] = React.useState("Mai");

    function HandleChange(newPage) {
        setPage(newPage)
    }

    return (
        <div className="dashboard">
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar
                        pageName={page}
                        handleChangeFunc={HandleChange}
                    />
                    <Main
                        pageName={page}
                        handleChangeFunc={HandleChange}
                    />
                </div>
            </div>

        </div>

    );
}

export default Dashboard;