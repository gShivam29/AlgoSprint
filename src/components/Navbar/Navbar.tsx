import React from 'react';
import Link from 'next/link';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return <div className="flex items-center justify-between sm:px-12 px-2 sm:px-12 px-2 md:px-2">
        <Link href="/" className="flex items-center justify-center h-11">
            <img src="/logo.png" alt="Leetclone" className="h-full" />
        </Link>
        <div className="flex items-center">
            <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
        hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent 
        transition duration-200 ease-in-out"
            >Sign in</button>
        </div>
    </div>
}
export default Navbar;