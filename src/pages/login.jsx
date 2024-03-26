import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Dashboard from './dashboard';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Store the users email in local storage
        localStorage.setItem('userEmail', email); 
        // put where to navigate after login
        navigate('/dashboard'); 
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex absolute top-2 transform -translate-x-20 bg-[#ced6d8] rounded-custom" style={{ height: '18rem', width: '29rem' }}></div>
          <h1 className="flex text-left text-5xl justify-center font-medium mb-4">Volunteer Management System</h1>
        </div>
        <div className="flex flex-col justify-center w-1/3 pr-8 relative">
          <div className="absolute top-1/4 transform -translate-y-1/2 left-1/2 w-screen h-60 bg-[#7b9298] rounded-custom"></div>
          <form onSubmit={handleSubmit} className="relative z-10 bg-clip-border p-7 pt-14 pl-12 pr-12 bg-[#c6eaea] rounded-3xl shadow-2xl flex flex-col items-center">
            <div className="mb-4 w-full">
              <input className="w-full h-14 px-4 py-3 border rounded-xl text-left" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4 w-full">
              <input className="w-full h-14 px-4 py-3 border rounded-xl text-left" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex flex-col lg:flex-row gap-3 justify-center mb-4 w-full">
              <button type="submit" className="flex-1 bg-[#254E58] hover:bg-[#409cb1] text-white font-medium py-3 px-4 rounded-2xl">Login</button>
              <Link to="/signup" className="flex-1 bg-[#254E58] hover:bg-[#409cb1] text-white font-medium py-3 px-4 rounded-2xl text-center flex items-center justify-center">Sign Up</Link>
            </div>
            <a className="self-start text-[#434d4c] mb-10 pl-4 " href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
      <Footer />
      <div className="absolute bg-[#a4b5b9]" style={{ transform: 'translate(575px, 500px)', borderRadius: '4rem 4rem 0 0', height: 'calc(30rem - 179px)', width: '32rem' }}></div>
    </div>
  );
};

export default LoginPage;
