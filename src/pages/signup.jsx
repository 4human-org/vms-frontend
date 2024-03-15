import Footer from '../components/footer';

const SignUpPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-1 justify-center'>
                <div className='flex flex-col gap-20 justify-center items-center'>
                    <h1 className='text-4xl font-medium'>Volunteer Management System</h1>
                    <div className='flex-2'>
                        <form className='bg-[#fef6d8] w-2/3 mx-auto pt-12 pl-12 pr-12 pb-10 border shadow-xl rounded-3xl'>
                            <input className='mb-4 w-full h-12 pl-4 rounded-xl text-xs placeholder-gray-500' type='text' placeholder='First Name' />
                            <input className='mb-4 w-full h-12 pl-4 rounded-xl text-xs placeholder-gray-500' type='text' placeholder='Last Name' />
                            <input className='mb-4 w-full h-12 pl-4 rounded-xl text-xs placeholder-gray-500' type='email' placeholder='Email' />
                            <input className='mb-4 w-full h-12 pl-4 rounded-xl text-xs placeholder-gray-500' type='password' placeholder='Password' />
                            <div className='flex flex-col h-12 mb-4 items-center'>
                                <button className='flex-1 bg-[#fcd137] w-40 text-xs hover:bg-green-700 font-bold rounded-md'>Sign Up</button>
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