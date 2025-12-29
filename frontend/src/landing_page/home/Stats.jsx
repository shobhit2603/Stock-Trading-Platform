import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function Stats() {
    return (
        <section>
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <h1 className='text-2xl font-medium py-10'>Trust with confidence</h1>
                    <h2 className='text-xl mb-2'>Customer-first always</h2>
                    <p className='text-neutral-500 mb-10 text-base/7'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br /> lakh crores of equity investments, making us India’s<br /> largest broker; contributing to 15% of daily retail<br /> exchange volumes in India.</p>
                    <h2 className='text-xl mb-2'>No spam or gimmicks</h2>
                    <p className='text-neutral-500 mb-10 text-base/7'>No gimmicks, spam, "gamification", or annoying push<br /> notifications. High quality apps that you use at your<br /> pace, the way you like. <a href='#' className='text-[#387ed1] hover:text-neutral-800'>Our philosophies.</a></p>
                    <h2 className='text-xl mb-2'>The Zerodha universe</h2>
                    <p className='text-neutral-500 mb-10 text-base/7'>Not just an app, but a whole ecosystem. Our investments<br /> in 30+ fintech startups offer you tailored services<br /> specific to your needs.</p>
                    <h2 className='text-xl mb-2'>Do better with money</h2>
                    <p className='text-neutral-500 mb-10 text-base/7'>With initiatives like <a href='#' className='text-[#387ed1] hover:text-neutral-800'>Nudge</a> and <a href='#' className='text-[#387ed1] hover:text-neutral-800'>KillSwitch</a>, we don't just<br /> facilitate transactions, but actively help you do better<br /> with your money.</p>
                </div>
                <div>
                    <img src='/ecosystem.png' alt='Ecosystem' className='w-150' />
                    <div className='flex gap-10 ml-30 mt-10'>
                        <a href='#' className='text-[#387ed1] flex gap-1 hover:text-neutral-800 font-medium'>Explore our products <ArrowRight /></a>
                        <a href='#' className='text-[#387ed1] flex gap-1 hover:text-neutral-800 font-medium'>Try Kite demo <ArrowRight /></a>
                    </div>
                </div>
            </div>
            <img src='/pressLogos.png' alt='Press Logos' className='mx-auto mt-2 hover:opacity-80 cursor-pointer' />
        </section>
    )
}
