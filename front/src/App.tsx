import React, {ChangeEvent, useState} from 'react';
import './App.css';
import InputBox from "./components/InputBox";
import {Route, Routes} from "react-router-dom";
import SignUp from "./views/Authentication/SignUp";

function App() {
    const [id, setId] = useState<string>('');
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
    }

    const onIdButtonClickHandler = () => {

    }

    return (
       <Routes>
           <Route path='/auth'>
               <Route path='sign-up' element={<SignUp />} />
           </Route>
       </Routes>
    );
}

export default App;
