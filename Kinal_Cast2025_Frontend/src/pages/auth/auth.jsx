import { useState } from "react"
import {Login} from "../../components/Login";

import "./authPage.css"

export const Auth= () => {

  const [isLogin,setIsLogin]=useState(true);

  const handleAutoPageToggle = () =>{
    setIsLogin((prev) => !prev)
  }

  return (
    <div clasName="ath-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAutoPageToggle}/>
      ):(
        register
      )}
    </div>
  )
}
