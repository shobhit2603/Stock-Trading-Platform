import React from 'react'

export default function Hero() {
    return (
        <section className='p-5 mb-40'>
            <div className='flex flex-col items-center text-center'>
                <img src='/landing.svg' alt='Hero Image' className='my-6 w-250'/>
                <h1 className='mt-6 text-3xl font-medium text-neutral-700'>Invest in everything</h1>
                <p className='mt-3 mb-10 text-xl text-neutral-700'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='bg-[#387ed1] text-white font-medium text-xl py-2 px-9 rounded cursor-pointer hover:bg-neutral-900'>Sign up for free</button>
            </div>
        </section>
    )
}
