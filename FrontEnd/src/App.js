import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
import Com from './Components/Container/Com';
import SignIn from './Components/Login/SignIn';
import { Route, Routes } from 'react-router-dom';
import Friend from './Components/Friends/Friend';
import Profile from './Components/Profile/Profile';
import Signup from './Components/Register/Signup';
import Request from './Components/Request/Request';
import UserList from './Components/UserList/UserList';
import Deshboard from './Components/Deshboard/Deshboard';
//import SearchFil from './Components/Search box/SearchFil'
import ProRoute from './Components/Protected Route/ProRoute';
//import PopUp from './Components/PopUp/PopUp';


function App() {
  return (
    <>
      <Provider store={store}>

      {/* <SearchFil /> */}
      {/* <PopUp /> */}


        <Routes>
          <Route path='/' element={<Com />} />
          <Route path='/Deshboard' element={<ProRoute Component={Home} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Sigin' element={<SignIn />} />
          <Route path='/User-List' element={<ProRoute Component={UserList} />} />
          <Route path='/Friends' element={<ProRoute Component={Friend} />} />
          <Route path='/Request' element={<ProRoute Component ={Request} />} />
          <Route path='/Deshboard' element={<ProRoute Component ={Deshboard} />} />
          <Route path='/profile' element={<ProRoute Component={Profile} />} />
          <Route path='/chat' element={<ProRoute Component={Chat} />} />
        </Routes>
      </Provider>
    </>

  );
}

export default App;
