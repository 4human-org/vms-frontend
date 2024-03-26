import { Link } from 'react-router-dom';

const Dashboard = () => {
  
  // will take the user email from the local storage from login page
  const userEmail = localStorage.getItem('userEmail'); 

  return (
    <div>
      <h1>Welcome, {userEmail}</h1> 
    </div>
  );
};

export default Dashboard;
