import CustomButton from "@components/commons/button";
import heroImage from '@assets/images/hero2.png'

export default function StandOutSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 space-y-10 bg-white items-center">
            <div>
                <img src={heroImage} />
            </div>
            <div className="lg:w-1/2 flex flex-col space-y-10 items-start z-50">
                <span className="font-medium text-4xl">
                    Why We Stand Out in the Industry
                </span>
                <p className="font-normal text-sm leading-7">
                    KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership, innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East and the Far East.  Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions to our clients in a dynamic and fast-changing
                    regulatory landscape.
                </p>
                <CustomButton label="Learn More" type="red" />
            </div>
        </section>
    )
}