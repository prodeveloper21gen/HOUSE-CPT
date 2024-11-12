import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Image from "next/image";

import img1 from '@/app/assets/img/image copy 6.png'
import img2 from '@/app/assets/img/image copy 8.png'
import img3 from '@/app/assets/img/image copy 9.png'
import p1 from '@/app/assets/img/image copy 14.png'
import p2 from '@/app/assets/img/image copy 15.png'
import p3 from '@/app/assets/img/image copy 16.png'
import Title from "@/app/components/title/Title";

const peoples = [
    { src: p1, name: '- Mr. James' },
    { src: p2, name: '- Mr. Ahmed' },
    { src: p3, name: '- Mr. Marco' },
]

const cards = [img1, img2, img3]

export default function Story() {
    return (<div>
        <HeroSection className='py-32 bg-image' title='Read some story from clients!' />
        <div className="px-[10px]">
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {peoples.map((hum, i) => <div
                    className="flex flex-col gap-3 p-4 "
                    key={i}>
                    <Image src={hum.src} className="h-[80px] w-[80px]" alt='peo' />
                    <Description desc='I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.' />
                    <Description className="text-black font-bold" desc={hum.name} />
                </div>)}
            </div>
        </div>
        <div className="my-10 p-4 gap-4 py-10 flex bg-center bg-cover justify-center rounded" style={{ backgroundImage: 'url("/assets/img/image copy 6.png")' }}>
            <div className="flex sc-690:flex-wrap gap-4 sc-690:justify-center w-full max-w-[800px]">
                <Image src={p1} alt='people' />
                <div>
                    <Title className="text-white" title='Mr. James’s says : “I’m so happy!”' />
                    <Description className="text-white font-medium" desc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                </div>
            </div>
        </div>
        <Title title='Mr. James’s villa' className="my-16 text-center " />
        <div className="grid gap-4 px-[10px] mb-20" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {cards.map((img, i) => <div key={i}>
                <Image src={img} alt={img} className="w-full h-64 object-cover rounded" />
            </div>)}
        </div>
    </div>)
}