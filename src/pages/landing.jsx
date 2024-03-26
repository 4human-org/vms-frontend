import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />
        </div>
    );
};

const LandingHeader = () => {
    return (
        //if you use flex justify-between you can remove text-right assuming you have something
        //before the div containing the links
        <header className="bg-[#254E58] text-right text-white font-medium p-5">
            <div className='pr-5'>
                <Link to='/Login' className='pr-10'>Login</Link>
                <Link to='/Signup'>Signup</Link>
            </div>
        </header>
    );
};

export default LandingPage;