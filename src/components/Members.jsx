/* eslint-disable no-unused-vars */
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
  // grab everything to map...this where i can include any db details.
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
          window.location.reload();
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
      return (
        <>
          {arr[0].map((item) => (
            <tr key={item.idKey}>
              <td>{item.idKey}</td>
              <td><a className="text-reset text-decoration-none" href={`/userDashboard/${item.username}-${item.idKey}`}>{item.username}</a></td>
              <td>USER</td>
            </tr>
          ))}
        </>
      );
    }
    return (
      <tr className="d-flex align-items-center">
        <td>Loading... &nbsp;</td>
        <td className="spinner-border" role="status" aria-hidden="true" />
      </tr>
    );
  }

  return (
    <section>
      <div className="text-white">
        <div className="container">
          <h1 className="pt-3">Members List</h1>
          <div>
            <table className="table text-white">
              <thead>
                <tr>
                  <th style={{ width: '25%' }} scope="col">ID</th>
                  <th style={{ width: '25%' }} scope="col">Members</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {createListOfMembers()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * This is arguably the best approach because it uses a property that is unique for each item in the dataset.
 * For example, if rows contains data fetched from a database, one could use the table's Primary Key (which typically is an auto-incrementing number).
 * The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
 * Unique - A key cannot be identical to that of a sibling component.
 * Static - A key should not ever change between renders.
 */
