import heroImage from '@assets/images/hero5.png'

export default function ChallengeSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 space-y-10 bg-white items-center">
            <div>
                <img src={heroImage} />
            </div>
            <div className="lg:w-1/2 flex flex-col space-y-10 items-start z-50">
                <span className="font-medium text-4xl">
                    The Current Challenges
                </span>
                <p className="font-normal text-sm leading-7">
                    Legal requirements and recent developments compel Financial Institutions to adopt comprehensive and effective risk-based controls to prevent misuse by money launderers or purveyors of terrorist acts.
                </p>
                <p className="font-normal text-sm leading-7">
                    Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs for companies in the financial services space.
                </p>
                <p className="font-normal text-sm leading-7">
                    Untested, rubber stamp solutions adopted to appease regulators will not do in today’s environment.
                </p>
            </div>
        </section>
    )
}