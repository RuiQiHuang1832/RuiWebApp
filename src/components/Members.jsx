import React, { useEffect, useState } from 'react';
import ls from 'localstorage-slim';

// still need to give each array a key
// sometimes breaks, might need to check if its null,
// and if it is null, return back <div>loading</div>, so users
// dont get blank page
const arr = [];
const TITLE = 'Members';
export default function Members() {
  // const [role, setRole] = useState()
  // const [username, setUsername] = useState()

  const [isBusy, setBusy] = useState(true);
  const [members, setMembers] = useState();
  const [isPushed, setPushed] = useState(true);

  function mapFunc() {
    if (!isBusy) {
      const results = members.map((obj) => ({
        role: obj.role,
        username: obj.username,
      }));

      arr.push(results);
      setPushed(false);
    }
  }
  useEffect(() => {
    document.title = TITLE;
    if (ls.get('key') !== null) {
      setMembers(ls.get('key', { decrypt: true }));
      setBusy(false);
      mapFunc();
    } else {
      fetch('https://ruibackend.herokuapp.com/user/getAll')
        .then((response) => response.json())
        .then((data) => {
          setMembers(data);
          ls.set('key', data, { encrypt: true, ttl: 600 });
        })
        .then(() => setBusy(false))
        .then(() => {
          mapFunc();
        });
    }
  }, [isBusy]);

  // console.log(arr)

  // const results = useMemo(() => members.map(obj => ({
  //     role: obj.role,
  //     username: obj.username

  // })), [isBusy, members])

  // const results = members.map(obj => ({
  //     role: obj.role,
  //     username: obj.username

  // }))

  // console.log(results)

  return (
    <div>
      members
      <div>

        {isPushed ? <div>Loading</div>
          : (
            <ul>
              {arr[0].map((item) => <li>{item.username}</li>)}

            </ul>
          )}

      </div>

    </div>
  );
}

// {isPushed ? <div>loading</div> :
// <div>Members:
//     <ul>
//         {/* {console.log(memberlist)} */}

//         {/* {memberlist[0].map((item) => (
//             <li>{console.log(item)}</li>
//         ))} */}
//         {/* {members.map((item) => (
//         <li>{item.role}</li>
//     ))} */}

//     </ul>

// </div>

// }
