import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function Education() {
    return (
        <section className='mb-40'>
            <div className='flex items-center justify-center gap-35'>
                <div>
                    <img src='/index-education.svg' alt='Varsity Image' className='w-100'/>
                </div>
                <div>
                    <h2 className='text-2xl mb-4 font-medium'>Free and open market education</h2>
                    <p className='text-base/7 mb-4 text-neutral-800'>Varsity, the largest online stock market education book in the world<br /> covering everything from the basics to advanced trading.</p>
                    <a href='#' className='flex gap-1 text-[#387ed1] hover:text-neutral-800 font-medium mb-10'>Varsity <ArrowRight /></a>
                    <p className='text-base/7 mb-4 text-neutral-800'>TradingQ&A, the most active trading and investment community in<br /> India for all your market related queries.</p>
                    <a href='#' className='flex gap-1 text-[#387ed1] hover:text-neutral-800 font-medium'>TrendingQ&A <ArrowRight /></a>
                </div>
            </div>
        </section>
    )
}
