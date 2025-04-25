import React, { useState } from 'react';
import SignupModal from './SignupModal';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
  
    if (!isOpen) return null;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password }); 
      onClose(); 
    };

    return (
        <>
       <div className='fixed inset-0 z-50 bg-white flex justify-center text-center'>
        <div className='rounded-2xl mb-8 p-8 w-1/2'>
        <button onClick={onClose} className="text-xl float-right font-bold">&times;</button>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-8'>
            <h1 className='font-bold text-2xl mb-2'>Login</h1>
            <input type='email' placeholder='Enter your Email' className='p-2 border-rounded' value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type='password' placeholder='Enter your Password' className='p-2 border-rounded' value={password} onChange={e => setPassword(e.target.value)} required/>
            <button type='submit' className='btn btn-primary'>Login</button>
            <p className='text-xl'>Don't have an account? <button onClick={() => setShowSignup(true)} className='text-blue-600 font-bold hover:underline'>Singup</button> here.</p>
        </form>
        </div>
       </div>
       <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
       </>
    );
};

export default LoginModal;