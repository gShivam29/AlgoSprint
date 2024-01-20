import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AuthModal from '@/components/Modals/AuthModal';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #614385, #516395)',
    width: '100%',
    height: '100vh',
    color: 'white',
  }

  return <div style={gradientStyle}>
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div className= "flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
        <img src='/hero.png' alt='slogan'/>
      </div>
      <AuthModal />
    </div>
  </div>


};
export default AuthPage;
