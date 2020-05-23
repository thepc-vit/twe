import React from 'react';
import UserForm from './components/form/UserForm'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
      </ul>
      <UserForm />
    </div>
  );
}

export default App;
