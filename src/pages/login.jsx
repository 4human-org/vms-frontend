import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <div className="flex flex-col justify-center w-1/2 pl-8">
          <h1 className="text-left text-5xl pl-4 font-medium mb-4">Volunteer Management System</h1>
        </div>
        <div className="flex flex-col justify-center w-1/3 pr-8 relative">
          <div className="absolute top-1/4 transform -translate-y-1/2 left-1/2 w-screen h-52 bg-[#fcd137] rounded-3xl"></div>
          <form className="relative z-10 bg-clip-border p-7 pt-14 pl-12 pr-12 bg-[#fef6d8] rounded-3xl shadow-2xl flex flex-col items-center">
            <div className="mb-4 w-full">
              <input className="w-full h-14 px-4 py-3 border rounded-xl text-left" type="email" placeholder="Email" />
            </div>
            <div className="mb-4 w-full">
              <input className="w-full h-14 px-4 py-3 border rounded-xl text-left" type="password" placeholder="Password" />
            </div>
            <div className="flex flex-col lg:flex-row gap-3 justify-center mb-4 w-full">
              <button type="submit" className="flex-1 bg-[#fcd137] hover:bg-green-700 text-black font-bold py-3 px-4 rounded-2xl">Log In</button>
              <Link to="/signup" className="flex-1 bg-[#fcd137] hover:bg-green-700 text-black font-bold py-3 px-4 rounded-2xl text-center flex items-center justify-center">Sign Up</Link>
            </div>
            <a className="self-start text-slate-400 mb-10 pl-4 " href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
