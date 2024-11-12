import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Title from "@/app/components/title/Title";
import Image from "next/image";

import cs11 from '@/app/assets/svg/cs11.svg'
import cs12 from '@/app/assets/svg/cs12.svg'
import cs13 from '@/app/assets/svg/cs13.svg'
import cs14 from '@/app/assets/svg/cs14.svg'

import sec2i from '@/app/assets/img/image copy 17.png'
import sec3i from '@/app/assets/img/image copy 18.png'

const cardsSec1 = [
  { icon: cs11, title: 'Design building/house', desc: 'We have an architect for design new buildings' },
  { icon: cs12, title: 'Interior Design', desc: 'We have an interior designer for design your perfect inside house' },
  { icon: cs13, title: 'Build from scratch', desc: 'We have an contractor for build new building from scratch' },
  { icon: cs14, title: 'Renovation', desc: 'We can also renovate or rebuilds new buildings/house' },
]


export default function Services() {
  return (<div>
    <HeroSection className='py-32 bg-image' title='Our team services' />
    <div className="px-[10px]">
      <div className="grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {cardsSec1.map((card, i) => (
          <div className={"flex flex-col mx-auto p-4 w-full max-w-[250px] rounded justify-between gap-2 "} style={{ backgroundColor: i == 0 ? '#023047' : '' }} key={card.title}>
            <Image
              src={card.icon}
              alt={card.title}
              className="rounded-md"
              style={{ width: '60px', height: '60px' }}
            />
            <Title className={i != 0 ? "text-[20px] text-black" : "text-[20px] text-white"} title={card.title} />
            <Description className={i == 0 && "text-white "} desc={card.desc} />
          </div>
        ))}
      </div>
      <div style={{ backgroundImage: 'url("/assets/img/image copy 6.png")' }} className="bg-cover bg-center flex sc-1023:flex-wrap gap-4 my-16 items-center rounded">
        <Image src={sec2i} className="rounded-l max-w-[600px] h-auto sc-1023: w-full" alt='sec2i' />
        <div className="p-4">
          <Title className="text-white" title='Design building / house' />
          <Description className="text-white font-medium" desc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </div>
      </div>
      <div style={{ backgroundImage: 'url("/assets/img/image copy 6.png")' }} className="bg-cover bg-center flex sc-1023:flex-wrap my-16 items-center rounded">
        <div className="p-4">
          <Title className="text-white" title='Design building / house' />
          <Description className="text-white font-medium" desc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </div>
        <Image src={sec3i} className="rounded-r max-w-[600px] h-auto sc-1023: w-full" alt='sec3i' />
      </div>
    </div>
  </div>)
}