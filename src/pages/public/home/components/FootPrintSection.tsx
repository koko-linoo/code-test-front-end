import countryImage1 from '@assets/images/country1.png';
import countryImage2 from '@assets/images/country2.png';
import countryImage3 from '@assets/images/country3.png';
import countryImage4 from '@assets/images/country4.png';

interface FootPrint {
    title: string;
    image: string;
    color: string;
    countries: string[],
}

const footPrints: FootPrint[] = [
    {
        title: "North America & Caribbean",
        image: countryImage1,
        color: "country-one",
        countries: "United States Mexico Dominican Republic Jamaica".split(" ", -1),
    },
    {
        title: "Central & South America",
        image: countryImage2,
        color: "country-two",
        countries: "Costa Rica El Salvador Panama Venezuela Ecuador Chile Argentina Colombia Uruguay".split(" ", -1),
    },
    {
        title: "Europe & Africa",
        image: countryImage4,
        color: "country-three",
        countries: "United Kingdom Spain Bulgaria Ethiopia Somalia Cote de Ivory Djibouti".split(" ", -1),
    },
    {
        title: "Middle East & Far East",
        image: countryImage3,
        color: "country-four",
        countries: "Israel Saudi Arabia Dubai Philippines".split(" ", -1),
    },
]

export default function FootPrintSection() {
    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 bg-white flex flex-col items-center space-y-8">
            <span className="text-xl font-medium">
                Our Clients and Footprint
            </span>
            <span className="text-center text-xs font-normal md:w-2/3 leading-5">
                Clients include Banks, Non-Banking Financial Institutions, Non-Financial Institutions, Insurance Companies, Broker Dealers, Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, and Crypto Currency Solution Companies including Exchanges and Market Places.
            </span>
            <div className="w-full grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
                {footPrints.map((footPrint) => (
                    <div key={footPrint.title}>
                        <div className='shadow rounded'>
                            <div className={`flex p-5 justify-center ${footPrint.color}`}>
                                <img className='h-28' src={footPrint.image} />
                            </div>
                            <div className='p-5 space-y-2'>
                                <span className='font-medium text-lg'>
                                    {footPrint.title}
                                </span>
                                <hr />
                                <ul className='space-y-2'>
                                    {footPrint.countries.map(country => (
                                        <li key={country} className='text-xs font-normal'>{country}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}