import React from 'react';
import { Link } from 'react-router-dom'

function App() {
  document.title = "Welcome"
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          <Link to="/welcome"> Welcome</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
