"use client"

import { useParams } from "next/navigation"

import img1 from '@/app/assets/img/image copy 6.png'
import img2 from '@/app/assets/img/image copy 8.png'
import img3 from '@/app/assets/img/image copy 9.png'
import img4 from '@/app/assets/img/image copy 10.png'
import img5 from '@/app/assets/img/image copy 11.png'
import img6 from '@/app/assets/img/image copy 12.png'
import img7 from '@/app/assets/img/image copy 13.png'
import img8 from '@/app/assets/img/image copy 14.png'
import img9 from '@/app/assets/img/image copy 15.png'
import vid from '@/app/assets/svg/vid.svg'
import HeroSection from "@/app/components/heroSection/HeroSection"
import Title from "@/app/components/title/Title"
import Description from "@/app/components/description/Description"
import Image from "next/image"
import Button from "@/app/components/button/Button"

const cards = [
    { id: 1, vid: 'lkewnfjwe fkj wefk ew', budget: '230.000', time: '4', gallery: [img1, img2, img3], desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", src: img1, title: 'Interior design' },
    { id: 2, vid: 'lkwekfnwfnwef we fopewj fpew fpoewj pfjew', budget: '53.000', time: '6', gallery: [img4, img5, img6], desc: "elrmgkenrgepo ererh ljer herui grel gueri ger gueripgerguergmy text of the printing and typesetting industryergergergreg erg erglegkner ghker gnkerge industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap kjnkjergjeg kerj gnerjge gjbeg jhegrjgb.", src: img2, title: 'Build modern house' },
    { id: 3, vid: 'kerg kjerjbre ptrhneklktrghptr h rtg re', budget: '34.000', time: '1', gallery: [img7, img8, img9], desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", src: img3, title: 'Build villa two floors' }
]

export default function Process() {
    const id = useParams().news
    const currentCard = cards.find(card => card.id == id)

    return (<div>
        <HeroSection className='py-32 bg-image' title='We build your dream house well and professionally' />
        <div className="px-[10px]">
            <div className="grid grid-cols-2 sc-830:grid-cols-1 gap-3">
                <div className="flex flex-col sc-830:items-center sc-830:mx-auto gap-4 w-full max-w-[500px]">
                    <Title title={currentCard.title} />
                    <Description className="sc-830:text-center" desc={currentCard.desc} />
                    <div className="flex flex-wrap gap-10">
                        <Title className="text-xl" title={"Budget: $" + currentCard.budget} />
                        <Title className="text-xl" title={"Time: " + currentCard.time + " months"} />
                    </div>
                </div>
                <Image src={currentCard.src} className="rounded" alt={currentCard.title} />
            </div>
        </div>
        <div className="px-[10px] mt-20 py-2 gap-4 bg-cover flex flex-col bg-center rounded" style={{ backgroundImage: 'url("/assets/img/image copy 8.png")' }} >
            <Image src={vid} alt='video' className="rounded mx-auto" />
            <div className="mb-10">
                <Title title='Gallery' className="text-center text-white my-10 mb-20" />
                <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }} className="grid gap-8">
                    {currentCard.gallery.map((card, i) => (
                        <div key={i} className="bg-white rounded shadow-slate-950 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                            <Image src={card} alt={card} className="w-full h-64 object-cover rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>)
}