import React from 'react'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie'

const cookies = new Cookies();


export default function Auth(props) {
    const {setIsAuth} = props;

    const signInwithGoogle = async () => {
        try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('user', result.user.refreshToken)
        setIsAuth(true)
    }catch (error) {
      console.log(error);
    }  

    }

  return (
    <div className='auth'>
        <p>Sign in with Google to Continue</p>
        <button onClick={signInwithGoogle}>Sign in with Google</button>
    </div>
  )
}
