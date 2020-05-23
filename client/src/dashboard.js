import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard() {
    document.title = "Dashboard"
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Welcome</Link>
                </li>
            </ul>
            <h1>Welcome to Dashboard</h1>
        </div>
    );
}

export default Dashboard;