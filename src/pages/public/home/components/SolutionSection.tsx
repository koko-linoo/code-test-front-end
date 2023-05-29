import heroImage from '@assets/images/hero1.png'

export default function SolutionSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 space-y-10 hero-bg items-center">
            <div className="lg:w-1/2 flex flex-col space-y-10 items-start z-50">
                <span className="font-medium text-4xl">
                    Our Solutions
                </span>
                <p className="font-normal text-sm leading-7">
                    KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
                </p>
                <p className="font-normal text-sm leading-7">
                    KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA and OFAC compliance solutions to financial institutions the world over.
                </p>
                <p className="font-normal text-sm leading-7">
                    Our deployment strategies are tailored to meet the individual needs of our clients in the context of a risk-laden world.  Our approach is to provide the most protection in the most intelligent, effective and cost-efficient manner.
                </p>
            </div>
            <div>
                <img src={heroImage} />
            </div>
        </section>
    )
}