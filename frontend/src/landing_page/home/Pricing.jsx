import { ArrowRight } from 'lucide-react';

export default function Pricing() {
    return (
        <section className='mb-40'>
            <div className='flex items-center justify-center gap-2'>
                <div>
                    <h2 className='text-2xl mb-4 font-medium'>Unbeatable pricing</h2>
                    <p className='text-base/7 mb-4 text-neutral-800'>We pioneered the concept of discount broking and price<br /> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' className='flex gap-1 text-[#387ed1] hover:text-neutral-800 font-medium'>See pricing <ArrowRight /></a>
                </div>
                <div className='flex gap-2'>
                    <div className='flex'>
                        <img src='/pricing-eq.svg' alt='Pricing' className='w-30' />
                        <p className='text-xs text-neutral-500 pt-10 -ml-4'>Free account<br /> opening</p>
                    </div>
                    <div className='flex'>
                        <img src='/pricing-eq.svg' alt='Pricing' className='w-30' />
                        <p className='text-xs text-neutral-500 pt-10 -ml-4'>Free equity delivery<br />
                            and direct mutual funds</p>
                    </div>
                    <div className='flex'>
                        <img src='/other-trades.svg' alt='Pricing' className='w-30' />
                        <p className='text-xs text-neutral-500 pt-10 -ml-2'>Intraday and<br/>
                            F&O</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
