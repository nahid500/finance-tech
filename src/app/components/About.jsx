import Image from "next/image";
import aboutimg from "@/app/images/aboutImg.png";

export default function About() {
    return (
        <>
        
            <div className="bg-cyan-400 grid grid-cols-1 md:grid-cols-2 pt-2 px-8 allign-center items-center">
                <Image src={aboutimg} alt="image" className="text-center" />
                
                <div className="px-6">
                    <h2 className="text-center text-2xl font-semibold mb-4">Welcome to Jakaria Inc.</h2>
                    <p className="pt-4 text-xl">Where innovation drives success. We help entrepreneurs and business owners raise capital through ICOs, while anyone can launch memecoins to generate short-term profits on decentralized exchanges. With over 5 years of fintech expertise, we provide the strategies to turn your crypto goals into reality. Letâ€™s create something impactful together!</p>
                </div>
                <p>

                </p>
                
            </div>
        </>
    );
}
