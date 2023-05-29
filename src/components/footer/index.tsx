import './footer.css'
import footerLogo from '@assets/images/footer-logo.png';
import footerVector from '@assets/images/footer-vector.png';
import footerSendMail from '@assets/images/sendMail.png';
import footerPhoneCall from '@assets/images/phoneCall.png';
import footerAddress from '@assets/images/address.png';
import facebook from '@assets/images/facebook.png';
import instagram from '@assets/images/instagram.png';
import linkedin from '@assets/images/linkedin.png';
import twitter from '@assets/images/twitter.png';

export default function PageFooter() {
    return (
        <footer className="px-10 lg:px-24 xl:px-64 space-y-5 bg-primary flex flex-col pt-20 pb-9 relative">
            <div className='flex flex-col xl:flex-row xl:space-x-10 space-y-5 w-full'>
                <div className='w-full  h-full'>
                    <ul className='space-y-5'>
                        <li ><img className='w-52' src={footerLogo} /></li>
                        <li className='text-xs flex space-x-2 items-center'>
                            <img className='w-3' src={footerAddress} />
                            <span>
                                1250 Capital of Texas Hwy. South
                                Building 3,
                                Suite 400
                                Austin, TX 78746
                            </span>
                        </li>
                        <li className='text-xs flex space-x-2 items-center'>
                            <img className='w-3' src={footerSendMail} />
                            <span>
                                Support: admin@kbzmoney.com
                            </span>
                        </li>
                        <li className='text-xs flex space-x-2 items-center'>
                            <img className='w-3' src={footerPhoneCall} />
                            <span>
                                Hotline: +959 7980 65880
                            </span>
                        </li>
                    </ul>
                </div>
                <hr className='xl:hidden' />
                <div className='w-full space-y-5 flex flex-col md:flex-row md:space-y-0 justify-between'>
                    <ul className='space-y-5'>
                        <li className='text-md'>Quick Links</li>
                        <li className='text-xs'><a href="#">Home</a></li>
                        <li className='text-xs'><a href="#">Services</a></li>
                        <li className='text-xs'><a href="#">AML Technology</a></li>
                        <li className='text-xs'><a href="#">Crypto Currencies</a></li>
                        <li className='text-xs'><a href="#">Resources</a></li>
                    </ul>
                    <ul className='space-y-5'>
                        <li className='text-xs md:mt-11'>Contact</li>
                        <li className='text-xs'>About Us</li>
                        <li className='text-xs'>Client Support</li>
                        <li className='text-xs'>Alerts</li>
                    </ul>
                    <hr className='md:hidden' />
                    <ul className='space-y-5'>
                        <li className='text-md'>About Us</li>
                        <li className='text-xs'>Disclaimer</li>
                        <li className='text-xs'>Privacy Policy</li>
                        <li className='text-xs'>Terms of Service</li>
                        <li className='text-xs'>Carrier</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='text-white text-xs flex flex-col w-full space-y-5 md:space-y-0 md:flex-row justify-between items-center '>
                <span>Copyright © 2022 <span className='text-yellow-500 font-bold'>KBZ Money</span>. All Rights Reserved.</span>
                <div className='flex space-x-2 '>
                    <img className='w-7' src={facebook} />
                    <img className='w-7' src={linkedin} />
                    <img className='w-7' src={instagram} />
                    <img className='w-7' src={twitter} />
                </div>
            </div>
            <img className='absolute bottom-0 left-0' src={footerVector} />
        </footer>
    )
}