import { accLinks, supportLinks, companyLinks, quickLinks, footerLinks } from '../constants';
import { Twitter, Facebook, Instagram, Linkedin, Youtube, Send, MessageCircle, } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='bottom-0 left-0 w-full bg-white border-t border-t-neutral-200'>
            <div className='flex gap-15 justify-center pt-8 pb-5 px-50'>
                <div>
                    <img src="/logo.svg" alt="Logo" className="w-40" />
                    <p className="text-xs text-neutral-500 py-5">© 2010 - 2025, Zerodha Broking Ltd.<br />
                        All rights reserved.</p>
                    <div className='flex gap-5 text-neutral-500'>
                        <Twitter />
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                    </div>
                    <hr className='my-5 text-neutral-300' />
                    <div className='flex gap-5 text-neutral-500'>
                        <Youtube />
                        <MessageCircle />
                        <Send />
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-medium pb-3'>Account</h3>
                    <ul>
                        {accLinks.map(({ id, name }) => (
                            <li key={id} className='py-2'>
                                <a href='#' className='text-sm text-neutral-500 hover:text-[#387ed1]'>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium pb-3'>Support</h3>
                    <ul>
                        {supportLinks.map(({ id, name }) => (
                            <li key={id} className='py-2'>
                                <a href='#' className='text-sm text-neutral-500 hover:text-[#387ed1]'>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium pb-3'>Company</h3>
                    <ul>
                        {companyLinks.map(({ id, name }) => (
                            <li key={id} className='py-2'>
                                <a href='#' className='text-sm text-neutral-500 hover:text-[#387ed1]'>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium pb-3'>Quick links</h3>
                    <ul>
                        {quickLinks.map(({ id, name }) => (
                            <li key={id} className='py-2'>
                                <a href='#' className='text-sm text-neutral-500 hover:text-[#387ed1]'>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='text-[0.7rem] text-neutral-400 flex flex-col gap-4 px-55 mt-5'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#' className='text-[#387ed1]'>complaints@zerodha.com</a>, for DP related to <a href='#' className='text-[#387ed1]'>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <a href='#' className='text-[#387ed1]'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>India's largest broker based on networth as per NSE. <a href='#' className='text-[#387ed1]'>NSE broker factsheet</a></p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary broker, DP, Mutual Fund etc., you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' className='text-[#387ed1]'>create a ticket here.</a></p>

                <p>*Customers availing insurance advisory services offered by Ditto Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent Composite License No CA0738 will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
            </div>
            <div className='py-5'>
                <ul className='flex gap-6 text-xs font-medium text-neutral-400 justify-center items-center'>
                    {footerLinks.map(({ id, name }) => (
                        <li key={id}>
                            <a href='#' className='hover:text-[#387ed1]'>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
