import React from 'react';
import UserForm from './components/form/UserForm'

function Dashboard() {
    document.title = "Dashboard"
    return (
        <div>
            <UserForm />
        </div>
    );
}

export default Dashboard;