import preImageOne from '@assets/images/preview1.png';
import preImageTwo from '@assets/images/preview2.png';
import preImageThree from '@assets/images/preview3.png';
import blueArrowImage from '@assets/images/btn-arrow-blue.png'
import whiteArrowImage from '@assets/images/btn-arrow-white.png'

export default function PreviewTagSection() {
    return (
        <section className="md:-mt-28 justify-start px-10 flex-wrap md:px-24 lg:px-64 py-5 flex items-center">
            <div className="w-full z-10 md:w-64 md:h-64 justify-between p-8 space-y-2 shadow-lg mr-5 mb-5 rounded text-white flex flex-col preview-tag-bg">
                <div>
                    <img className='w-9 h-9' src={preImageThree} />
                </div>
                <div>AML Technology</div>
                <div className='text-xs'>KBZ Money's AML Compass Platform combines cutting-edge technology and proven...</div>
                <div className="flex text-sm items-center space-x-2">
                    <span className='text-xs'>
                        Get Started
                    </span>
                    <img className='w-4' src={whiteArrowImage} />
                </div>
            </div>
            <div className="w-full md:w-64 md:h-64 justify-between p-8 mr-5 mb-5 rounded space-y-2 shadow-md bg-white flex flex-col">
                <div>
                    <img className='w-9 h-9' src={preImageOne} />
                </div>
                <div>AML Outsourcing</div>
                <div className='text-xs'>Compliance as a Service ™ or CAS delivers not just systems through its AML Compass...</div>
                <div className="flex text-sm items-center space-x-2">
                    <span className='text-xs'>
                        Get Started
                    </span>
                    <img className='w-4' src={blueArrowImage} />
                </div>
            </div>
            <div className="w-full md:w-64 md:h-64 justify-between p-8 mr-5 mb-5 rounded space-y-2 shadow-md bg-white flex flex-col">
                <div>
                    <img className='w-9 h-9' src={preImageTwo} />
                </div>
                <div>Crypto Currencies</div>
                <div className='text-xs'>The Crypto currency market is one of the most exciting and rapidly developing...</div>
                <div className="flex text-sm items-center space-x-2">
                    <span className='text-xs'>
                        Get Started
                    </span>
                    <img className='w-4' src={blueArrowImage} />
                </div>
            </div>
        </section>
    )
}