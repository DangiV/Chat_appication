import React from 'react'
import Navbar from '../Navbar/Navbar'
import Friend from '../Friends/Friend';
import Request from '../Request/Request';
import { useSelector } from 'react-redux'
import UserList from '../UserList/UserList';


function Home() {
  const state = useSelector(state => state.nav.currentpage)
  // //console.log("state value ", state);

  return (
    <>

      <Navbar />

      {state === "Friends" &&
        <Friend />
      }

      {state === "User-List" &&
        <UserList />
      }

      {state === "Request" &&
        <Request />
      }
    </>
  )
}


export default Home
