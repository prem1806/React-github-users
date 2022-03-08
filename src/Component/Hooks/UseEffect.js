import React,{useState,useEffect} from 'react';
import './UseEffectstyle.scss'

function UseEffect() {

    const url = 'https://api.github.com/users';

    const [users,setUsers] = useState([]);

    const [loading,setLoading] = useState(false);


    const getUsers = async () =>{
        const response = await fetch(url);
        const users = await response.json();
        setLoading(false);
        setUsers(users);

        console.log(users);
    }

    useEffect(()=>{
        setLoading(true);
        getUsers();
    },[])

    if(loading){
        return(
            <h1 className='text-center'>Loading ...</h1>
        )
    }

  return (
    <div className='main'>
        <h1 className='text-center mt-4'>Github Users</h1>
        <ul className='users p-0'>
            {
                users.map((user)=>{
                    const {id,login,avatar_url,html_url} = user;

                    return(
                            <li key={id}>
                                <img src={avatar_url}></img>
                                <div>
                                    <h5 className='m-0'>{login}</h5>
                                    <a href={html_url} target="_blank">Profile</a>
                                </div>
                            </li>
                    )
                })
            }
        </ul>
    </div>

  )
}

export default UseEffect