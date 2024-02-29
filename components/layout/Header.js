import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import favicon from '@/app/favicon.ico'


const Header = () => {
    return (
        <div>
            <div className="py-2 px-4 w-full h-14 bg-gray-500 flex justify-between">
            <div className=" flex-1">
                    <Image src={favicon} alt="favicon" width={40} height={40} />
                </div>
                <div className=" flex-1 flex justify-around items-center">
                    <Link className='hover:text-gray-200 hover:text-xl font-bold' href="/">Home</Link>
                    <Link className='hover:text-gray-200 hover:text-xl font-bold' href="/Bloge">Bloge</Link>
                    <Link className='hover:text-gray-200 hover:text-xl font-bold' href="/Comtact-Us">Contact-Us</Link>
                    <Link className='hover:text-gray-200 hover:text-xl font-bold' href="/Products">products</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;