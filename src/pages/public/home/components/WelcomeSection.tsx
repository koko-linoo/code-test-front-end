import CustomButton from "@components/commons/button";
import heroImage from '@assets/images/hero3.png'

export default function WelcomeSection() {
    return (
        <section className="welcome-bg px-10 lg:px-24 xl:px-64 py-20 pt-20 lg:pb-40 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 space-y-10 items-center">
            <div className="lg:w-1/2 flex flex-col space-y-10 items-start z-50">
                <span className="font-medium text-4xl">
                    <span className="font-bold kbz-text-color">KBZ Money</span> compass anti money
                    laundering technology and services redefined
                </span>
                <p className="font-normal text-sm leading-7">
                    KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership.
                </p>
                <CustomButton label="Get Started" type="red" />
            </div>
            <div className="lg:w-1/2">
                <img className="w-full object-cover" src={heroImage} />
            </div>
        </section>
    )
}