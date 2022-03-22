import React, { useEffect, useMemo, useState } from 'react'
//might need to cache this...rather than performing mutliple fetch requests..could slow performance
//use memo for future
//still need to give each array a key
//sometimes breaks, might need to check if its null, and if it is null, return back <div>loading</div>, so users
//dont get blank page
let arr = []
export default function Members() {
    // const [role, setRole] = useState()
    // const [username, setUsername] = useState()

    const [isBusy, setBusy] = useState(true)
    const [members, setMembers] = useState()


    const [isPushed, setPushed] = useState(true)


    useEffect(() => {
        fetch('https://ruibackend.herokuapp.com/user/getAll')
            .then((response) => response.json())
            .then(data => {
                setMembers(data)
                // memberlist.push(results)
            }).then(() => setBusy(false)

                //console.log(members)
                // for (const x in memberlist[0]) {
                //     console.log(memberlist[0][x].role)
                // 
            ).then(() => {
                mapFunc()
            })

    }, [isBusy])

    function mapFunc() {

        if (!isBusy) {
            let results = members.map(obj => ({
                role: obj.role,
                username: obj.username
            }))


            arr.push(results)
            setPushed(false)
            //console.log(arr)
            //redu()


        }


    }

    // function redu() {
    //     arr.map((x) => {
    //         console.log(x[0])
    //     })
    // }

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

                {isPushed ? <div>Loading</div> :
                    <ul>{arr[0].map((item) =>
                        <li>{item.username}</li>
                    )}

                    </ul>

                }


            </div>

        </div>
    )
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