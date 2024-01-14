import React, { useState } from 'react';
import {getDatabase , ref ,set} from 'firebase/database';
import {app} from '../components/Firebase';

const Details = () => {

  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [focus , setFocus] = useState('');
  const [goal , setGoal] = useState('');
  const [name , setName] = useState('');
  //To avoid page refresh

  const submitHandler = (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    set(ref(db , 'user/' + name) , {
      gender : gender ,
      height : height,
      weight : weight ,
      focus : focus , 
      goal: goal,
    })
    console.log(gender, height, weight , focus  ,goal);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>

        <input type="text" onChange={(e) => setName(e.target.value)} />Name

      <div>
          <input onChange={(e) => setGender(e.target.value)} type='radio' value='Male' name='gender' />Male
          <input onChange={(e) => setGender(e.target.value)} type='radio' value='Female' name='gender' />Female
      </div>

      <h1>Focus Area</h1>
      <div>
        <input onChange={(e) => setFocus(e.target.value)} type='radio' value='Chest' />Chest
        <input onChange={(e) => setFocus(e.target.value)} type='radio' value='Full Body' />Full Body
        <input onChange={(e) => setFocus(e.target.value)} type='radio' value='Arm' />Arm
      </div>

      <h1>Goal</h1>
      <div>
      <input onChange={(e) => setGoal(e.target.value)} type='radio' value='Gain' />Gain
        <input onChange={(e) => setGoal(e.target.value)} type='radio' value='Lose' />Lose
      </div>


      <h1>nO. OF DAYS</h1>
      <div>
        <input type='text' onChange={(e) => setHeight(e.target.value)} />height
        <input onChange={(e) => setWeight(e.target.value)} type='text' />Weight
      </div>

      <div><button>Submit</button></div>

      </form>
    </div>
  )
}

export default Details
