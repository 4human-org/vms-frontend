import Footer from '../components/footer';

const SignUpPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-1 justify-center'>
                <div className='flex flex-col gap-20 justify-center items-center'>
                    <h1 className='text-4xl font-medium'>Volunteer Management System</h1>
                    <div className='flex w-full justify-center'>
                        <form className='flex flex-col gap-4 flex-1 bg-[#fef6d8] pt-12 pl-12 pr-12 pb-10 border shadow-xl rounded-3xl'>
                            <input className="h-14 px-4 py-3 border rounded-xl text-left" type="email" placeholder="Email" />
                            <input className='h-14 px-4 py-3 border rounded-xl text-left' type='text' placeholder='First Name' />
                            <input className='h-14 px-4 py-3 border rounded-xl text-left' type='text' placeholder='Last Name' />
                            <input className='h-14 px-4 py-3 border rounded-xl text-left' type='password' placeholder='Password' />
                            <div className='flex mt-4 h-12 justify-center items-center'>
                                <button className='bg-[#fcd137] hover:bg-green-700 text-black font-bold py-5 px-16 rounded-2xl'>Sign Up</button>
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