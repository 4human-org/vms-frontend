import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, firstName, lastName, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Signup successful:', data);
        // This will navigate to login after signing up correctly
        navigate('/login'); 
      } else {
        console.error('Signup failed:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-1 justify-center'>
        <div className='flex flex-col gap-20 justify-center items-center'>
          <h1 className='text-4xl font-medium'>Volunteer Management System</h1>
          <div className='flex w-full justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 flex-1 bg-[#a1d1d0] pt-12 pl-12 pr-12 pb-10 border shadow-xl rounded-3xl'>
              <input
                className="h-14 px-4 py-3 border rounded-xl text-left"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='h-14 px-4 py-3 border rounded-xl text-left'
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className='h-14 px-4 py-3 border rounded-xl text-left'
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className='h-14 px-4 py-3 border rounded-xl text-left'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='flex mt-4 h-12 justify-center items-center'>
                <button type='submit' className='bg-[#254E58] hover:bg-[#385f69] text-white font-medium py-5 px-16 rounded-2xl'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
