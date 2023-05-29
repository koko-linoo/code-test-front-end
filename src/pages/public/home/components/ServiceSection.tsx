import serviceImage1 from '@assets/images/service1.png';
import serviceImage2 from '@assets/images/service2.png';
import serviceImage3 from '@assets/images/service3.png';
import serviceImage4 from '@assets/images/service4.png';
import serviceImage5 from '@assets/images/service5.png';
import serviceImage6 from '@assets/images/service6.png';

interface Service {
    name: string;
    image: string;
}

const services: Service[] = [
    {
        name: "Consulting",
        image: serviceImage1,
    },
    {
        name: "Licensing",
        image: serviceImage2,
    },
    {
        name: "Training",
        image: serviceImage3,
    },
    {
        name: "Correspondent Account",
        image: serviceImage4,
    },
    {
        name: "Independent AML/BSA Reviews",
        image: serviceImage5,
    },
    {
        name: "Look Back Reviews",
        image: serviceImage6,
    },
]

export default function ServiceSection() {

    return (
        <section className="px-10 lg:px-24 xl:px-64 py-20 service-bg flex flex-col items-center space-y-8">
            <span className="text-xl font-medium">
                Our Services
            </span>
            <span className="text-center text-xs font-normal md:w-2/3 leading-5">
                KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.
            </span>
            <div className="grid gap-4 grid-cols-2 grid-rows-3 md:gap-4 md:grid-cols-3 md:grid-rows-2">
                {services.map((service) => (
                    <div key={service.name} className="bg-white justify-center rounded shadow-sm flex flex-col p-5 items-center space-y-3">
                        <img className='w-8' src={service.image} />
                        <span className='text-center text-xs'>{service.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}