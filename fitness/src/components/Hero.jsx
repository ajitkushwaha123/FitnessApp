import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getDatabase , ref, set} from "firebase/database";
import {app} from '../components/Firebase';

const Hero = () => {

    const navigate = useNavigate();
    // const [isStart , started] = useState(false);

    const btnClick = () => {
       navigate('/details');
    // alert();
    }

  return (
    <div>
      <button onClick={() => {btnClick()}}>Get Started</button>
    </div>
  )
}

export default Hero
