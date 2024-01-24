import React from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    return <form className='space-y-6 px-6 py-4'>
        <h3 className='text-x1 font medium text-white'>Sign in to AlgoSprint</h3>
        <div>
            {/* <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>Email</label> */}

            <input type='email' name="email" id="email"
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 flocus-border-blue-500 
                block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='E-mail' />
        </div>

        <div>
            {/* <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>Password</label> */}

            <input type='password' name="password" id="password"
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 flocus-border-blue-500 
                block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='Password' />
        </div>
        <button type="submit" className='w-full text-white focus:ring-blue-300 font medium rounded-lg text-sm
        px-5 py-2.5 text-center bg-brand-lav hover:bg-brand-lav-s'>Login</button>
        <button className='flex w-full justify-end'>
            <a href="#" className='text-sm block text-brand-lav hover:underline w-full text-left'>
                Forgot Password?
            </a>
            <a href="#" className='text-sm block text-brand-lav hover:underline w-full text-right'>Sign Up</a>
        </button>
        {/* <div className='text-sm font-medium text-gray-500'> 
            
            <a href="#" className='text-blue-700 hover:underline'>Sign Up</a>
        </div> */}
    </form>
}
export default Login;