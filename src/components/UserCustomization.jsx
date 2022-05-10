import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ls from 'localstorage-slim';

export default function UserCustomization(props) {
  // const { id } = useParams();

  const [id, setId] = useState('');
  // used to fetch from database and specifies user ID and name for the URL in dashboard on loadup
  useEffect(() => {
    if (ls.get('key') !== null) {
      const filteredCache = ls.get('key', { decrypt: true })
        .filter((obj) => {
          if (localStorage.getItem('user') === obj.username) {
            return obj;
          }
        });
      setId(filteredCache[0].id);
    } else {
      fetch('https://ruibackend.herokuapp.com/user/datalist')
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter((obj) => {
            if (localStorage.getItem('user') === obj.username) {
              return obj;
            }
          });
          setId(filtered[0].id); // [0] it will always be the first one and can only be one
        });
    }
  }, []);

  return (
    <div className="dropdown">
      <a
        className={props.device ? 'nav-link text-muted ms-xl-5  p-0  fw-bold' : 'nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-2'}
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Welcome,&nbsp;
        {localStorage.getItem('user')}
        !
        <i className=" bi bi-caret-down-fill " style={{ fontSize: '13px' }} />
      </a>

      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
        <li><NavLink className="dropdown-item" to={`/userDashboard/${localStorage.getItem('user')}-${id}`}>Dashboard</NavLink></li>
        <li><NavLink className="dropdown-item" to={`/userDashboard/settings/${localStorage.getItem('user')}-${id}`}>Settings</NavLink></li>
        <li><NavLink className="dropdown-item" to="/faq">FAQ</NavLink></li>
        <li><a className="dropdown-item" href="#" onClick={() => props.handleChange()}>Sign out</a></li>
      </ul>
    </div>
  );
}

/**
 *
 * @param {By default fetch() performs a GET request. But you can always indicate the HTTP method explicitly:

// ...
const response = await fetch('/api/names', {
  method: 'GET'
});
// ...} props
 * @returns
 */
