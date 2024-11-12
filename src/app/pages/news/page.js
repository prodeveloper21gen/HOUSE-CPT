import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Title from "@/app/components/title/Title";
import Image from "next/image";

import img1 from '@/app/assets/img/image copy 6.png'
import img2 from '@/app/assets/img/image copy 8.png'
import img3 from '@/app/assets/img/image copy 9.png'
import Button from "@/app/components/button/Button";
import Link from "next/link";

const cards = [
    { id: 1, src: img1, title: 'Interior design' },
    { id: 2, src: img2, title: 'Build modern house' },
    { id: 3, src: img3, title: 'Build villa two floors' }
]

export default function News() {
    return (
        <div>
            <HeroSection className="py-32 bg-image" title="Here are some of our best works" />
            <div className="px-[10px] py-2 bg-cover flex flex-col bg-center rounded" style={{ backgroundImage: 'url("/assets/img/image copy 8.png")' }} >
                <div className="flex justify-between flex-wrap p-5 pt-[400px] rounded my-10" style={{ backgroundImage: 'url("/assets/img/image copy 14.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <p className="text-[40px] text-white">Today’s property news</p>
                    <p className="text-white max-w-[400px]">{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'"}</p>
                </div>
                <div>
                    <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }} className="grid gap-8">
                        {cards.map((card, i) => (
                            <div key={i} className="bg-white rounded shadow-slate-950 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                                <Image src={card.src} alt={card.title} className="w-full h-64 object-cover rounded-t" />
                                <div className="p-6 flex flex-col gap-5">
                                    <Title title={card.title} />
                                    <Description desc="3 Months work time" />
                                    <Link href={`/pages/news/${card.id}`}>
                                        <Button text='See process' />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button text='See more' className='bg-none font-bold text-2xl mx-auto my-10' />
            </div>
        </div>
    );
}
