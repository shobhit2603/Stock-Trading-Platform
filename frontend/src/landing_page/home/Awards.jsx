import React from 'react'

export default function Awards() {
    return (
        <section className='mb-40'>
            <div className='flex items-center justify-center gap-50'>
                <div>
                    <img src='/largestBroker.svg' alt='Awards Image' />
                </div>
                <div>
                    <h1 className='text-4xl font-medium'>Largest stock broker in India</h1>
                    <p className='mt-2'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in<br /> India daily by trading and investing in:</p>
                    <ul className='flex mt-10 gap-30 pl-10 list-disc text-base/10'>
                        <div>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </div>
                        <div>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Gov. Securities</li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}
