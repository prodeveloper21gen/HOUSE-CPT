import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Title from "@/app/components/title/Title";
import Image from "next/image";

import img1 from '@/app/assets/img/image copy 6.png'
import img2 from '@/app/assets/img/image copy 8.png'
import img3 from '@/app/assets/img/image copy 9.png'
import img4 from '@/app/assets/img/image copy 10.png'
import img5 from '@/app/assets/img/image copy 11.png'
import img6 from '@/app/assets/img/image copy 12.png'
import Button from "@/app/components/button/Button";

const cards = [
    { src: img1, title: 'Interior design' },
    { src: img2, title: 'Build modern house' },
    { src: img3, title: 'Build villa two floors' },
    { src: img4, title: 'Modern interior design' },
    { src: img5, title: 'Renovation co working room' },
    { src: img6, title: 'Real estate house' }
]

export default function Gallery() {
    return (
        <div>
            <HeroSection className="py-32 bg-image" title="Here are some of our best works" />
            <div className="px-4 py-16">
                <div className="grid gap-8">
                    <div style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'}} className="grid gap-8">
                        {cards.map((card, i) => (
                            <div key={i} className="bg-white rounded shadow-slate-400 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                                <Image src={card.src} alt={card.title} className="w-full h-64 object-cover rounded-t" />
                                <div className="p-6 flex flex-col gap-5">
                                    <Title title={card.title} />
                                    <Description desc="3 Months work time" />
                                    <Button text='See process' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button text='See more' className='bg-none text-blue-900 font-bold text-2xl mx-auto' />
                </div>
            </div>
        </div>
    );
}
