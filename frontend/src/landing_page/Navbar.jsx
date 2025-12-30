import { Menu } from 'lucide-react';
import { navLinks } from '../constants';

export default function Navbar() {
    
    return (
        <nav className='fixed top-0 left-0 w-full bg-white z-50'>
            <div className='h-17 flex items-center justify-between px-50 border-b-neutral-200 border-b'>
                <div>
                    <a href='/'>
                    <img src='/logo.svg' alt='Logo' className='w-35 cursor-pointer' />
                    </a>
                </div>
                <div>
                    <ul className='flex gap-10'>
                        {navLinks.map(({ id, name, href }) => (
                            <li key={id} className='text-neutral-500 text-sm font-medium hover:text-[#387ed1] cursor-pointer'>
                                <a href={href}>{name}</a>
                            </li>
                        ))}
                        <li>
                            <Menu className='text-neutral-900 cursor-pointer' />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
