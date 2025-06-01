import Image from "next/image";
import s1 from "@/app/images/s1.png";
import s2 from "@/app/images/s2.png";
import s3 from "@/app/images/s3.png";


const services = [
    {
        "id":1,
        "title": "ICO EXPERT",
        "desc": "Easily raise funds within 7 days and ensure long-term growth with expert ICO services. From token creation to attracting investors, every step is carefully managed to ensure your project's success.",
        "image": s1
    },
    {
        "id":2,
        "title": "Meme Token Launch",
        "desc": "Launch your meme token and get listed in popular decentralized exchanges, with listing approval within 24 hours. Our services guarantee a pump and rapid market traction.",
        "image": s2
    },
    {
        "id":3,
        "title": "Community Token Launch",
        "desc": "Build a stronger community by developing the perfect ecosystem for your coin. We help you create and launch tokens that drive long-term organic growth, ensuring sustainability and success.",
        "image": s3
    },
]

export default function Services() {
    return(
        <div id="services" className="">
            {services.map((service) => (
                <div key={service.id} className=" px-8 bg-slate-100 justify-center">

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Image src={service.image} alt="service" width={450} className="flex mx-auto" />

                        <div className=" flex flex-col items-center pt-12 pl-6">
                            <h2 className="text-cyan-800 font-bold text-2xl pt-12">{service.id}. {service.title}</h2>
                            <p className="text-cyan-600 text-xl pt-8 px-6">{service.desc}</p>
                        
                            <button className="mt-12 bg-blue-400 text-white hover:bg-blue-300 p-2 px-4 rounded-full">Contact Us</button>

                        </div>

                    </div>

                </div>
               
            ))}


        </div>
    )
}