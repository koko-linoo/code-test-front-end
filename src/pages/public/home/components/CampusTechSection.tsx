import CustomButton from "@components/commons/button";
import heroImage from '@assets/images/hero4.png'

export default function HeroSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 space-y-10 hero-bg items-center">
            <div className="lg:w-1/2 flex flex-col space-y-10 items-start z-50">
                <span className="font-medium text-4xl">
                    AML Compass Technology Platforms
                </span>
                <p className="font-normal text-sm leading-7">
                    Our proprietary AML Compass Suite is a fully automated compliance solution for banks and non-bank financial institutions including hedge funds, broker dealers, insurance companies, and domestic and international MSBs that have regulatory reporting and control…
                </p>
                <CustomButton label="Learn More" type="white" />
            </div>
            <div>
                <img src={heroImage} />
            </div>
        </section>
    )
}