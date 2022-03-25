/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import ls from 'localstorage-slim';

// still need to give each array a key
// sometimes breaks, might need to check if its null,
// and if it is null, return back <div>loading</div>, so users
// dont get blank page
const arr = [];
const TITLE = 'Members';
const controller = new AbortController(); // for fetch aborting
export default function Members() {
  // const [role, setRole] = useState()
  // const [username, setUsername] = useState()

  const [isBusy, setBusy] = useState(true);
  const [members, setMembers] = useState();
  const [isPushed, setPushed] = useState(false);

  function mapFunc() {
    if (!isBusy) {
      const results = members.map((obj) => ({
        role: obj.role,
        username: obj.username,
        idKey: obj.id,
      }));
      arr.push(results);
      setPushed(true);
    }
  }
  useEffect(() => {
    document.title = TITLE;
    if (ls.get('key') !== null) {
      setMembers(ls.get('key', { decrypt: true }));
      setBusy(false);
      mapFunc();
    } else {
      fetch('https://ruibackend.herokuapp.com/user/getAll', {
        method: 'get',
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((data) => {
          setMembers(data);
          ls.set('key', data, { encrypt: true });
        })
        .then(() => setBusy(false))
        .then(() => {
          mapFunc();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isBusy]);

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);

  function createListOfMembers() {
    if (isPushed && arr.length !== 0) {
      return <ul>{arr[0].map((item) => <li key={item.idKey}><a href={`/userDashboard/${item.username}-${item.idKey}`}>{item.username}</a></li>)}</ul>;
    }
    return (
      <div className="d-flex align-items-center">
        <strong>Loading... &nbsp;</strong>
        <div className="spinner-border" role="status" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div>
      members
      <div>
        {createListOfMembers()}
      </div>

    </div>
  );
}

/**
 * This is arguably the best approach because it uses a property that is unique for each item in the dataset.
 * For example, if rows contains data fetched from a database, one could use the table's Primary Key (which typically is an auto-incrementing number).
 * The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
 * Unique - A key cannot be identical to that of a sibling component.
 * Static - A key should not ever change between renders.
 */
