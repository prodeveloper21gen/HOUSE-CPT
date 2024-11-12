import Image from "next/image";
import Button from "./components/button/Button";
import Description from "./components/description/Description";
import HeroSection from "./components/heroSection/HeroSection";
import Title from "./components/title/Title";

import sec1Img from '@/app/assets/svg/HomeSec1.svg'
import cs11 from '@/app/assets/svg/cs11.svg'
import cs12 from '@/app/assets/svg/cs12.svg'
import cs13 from '@/app/assets/svg/cs13.svg'
import cs14 from '@/app/assets/svg/cs14.svg'
import s3b1 from '@/app/assets/img/image.png'
import s3b2 from '@/app/assets/img/image copy.png'
import s3b3 from '@/app/assets/img/image copy 2.png'
import s4img from '@/app/assets/img/image copy 3.png'
import s4av from '@/app/assets/img/image copy 4.png'
import vid from '@/app/assets/svg/vid.svg'
import galochka from '@/app/assets/svg/galochka.svg'

const Section = ({ title, desc, children, className = '', ts = '', ds = '' }) => {
  return (<div className={className + ' flex flex-col gap-4 mt-24'}>
    <Title title={title} className={"text-center " + ts} />
    <Description desc={desc} className={"mx-auto w-fit text-center max-w-[350px] " + ds} />
    <div>{children}</div>
  </div>)
}

const cardsSec1 = [
  { icon: cs11, title: 'Design building/house', desc: 'We have an architect for design new buildings' },
  { icon: cs12, title: 'Interior Design', desc: 'We have an interior designer for design your perfect inside house' },
  { icon: cs13, title: 'Build from scratch', desc: 'We have an contractor for build new building from scratch' },
  { icon: cs14, title: 'Renovation', desc: 'We can also renovate or rebuilds new buildings/house' },
]

const cardsSec2 = [
  { title: 'Flexible time', desc: 'We work wherever you ready to builds. Work fast and profesional' },
  { title: 'Customizable design', desc: 'We can design your buildings, but we open if you want to customize your design or if you have architect' },
  { title: 'Negotiable price', desc: 'Yes, we’re open to negotiate the price with you, and we will give the best price for our lovely clients' },
]

export default function Home() {
  return (<div>
    <HeroSection className='py-32 bg-image' title='We build your dream house well and professionally' desc='Our team can build a house according to your wishes. Any design and concept, we will help make it happen' button='Contact us' />

    <section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }} className="gap-10 px-[10px]">
        <div style={{ flex: 1 }}>
          <Image
            src={sec1Img}
            alt="sec 1"
            className="rounded-md"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ flex: 1 }} className="flex flex-col justify-between gap-4">
          <Title title='Our company' />
          <Description desc='Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used.' />
          <Description desc='We already handled' className="text-gray-700" />
          <div className="flex flex-wrap gap-4">
            <Title className="text-xl font-[900]" title='50+ Clients' />
            <Title className="text-xl font-[900]" title='30+ House' />
            <Title className="text-xl font-[900]" title='20+ Building' />
          </div>
          <Button text='See more' />
        </div>
      </div>
    </section>

    <Section title='Our services' desc='Our services include building new buildings and renovating old buildings'>
      <div className="grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {cardsSec1.map((card, i) => (
          <div className={"flex flex-col mx-auto p-4 w-full max-w-[250px] rounded justify-between gap-2 "} style={{ backgroundColor: i == 0 ? '#1d6080' : '' }} key={card.title}>
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
    </Section>

    <Section title='Our benefits' className="px-[10px]" desc='Here our benefits if you collaboration with our team'>
      <div className="grid mt-10 gap-4 max-w-[1300px] mx-auto w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {cardsSec2.map((card, i) => (
          <div className={"flex flex-col mx-auto items-center py-12 p-4 w-full max-w-[400px] rounded justify-between gap-2 bg-blue-900/90"} key={card.title}>
            <Image
              src={galochka}
              alt={card.title}
              className="rounded-md"
              style={{ width: '60px', height: '60px' }}
            />
            <Title className={"text-[20px] text-white"} title={card.title} />
            <Description className={"text-white text-center"} desc={card.desc} />
          </div>
        ))}
      </div>
    </Section>

    <Section ts='text-white' ds='text-white font-medium' className="py-32 pb-0 px-[10px] rounded mt-[-70px] pt-44 bg-gradient-to-br from-[#056088E5] to-[#023957E5]" title='Our works' desc='Here our some of the best the result when we build some buildings, houses, and also interior designs'>
      <div className="grid gap-5 my-5 mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <Image className="rounded" src={s3b1} alt='s3' />
        <Image className="rounded" src={s3b2} alt='s3' />
        <Image className="rounded" src={s3b3} alt='s3' />
      </div>
      <div className="w-full flex justify-end items-center gap-10">
        <div className='h-[2px] bg-gradient-to-r rounded-lg from-blue-700 to-blue-500 w-full max-w-[700px]'></div>
        <Button text='See more' className="min-w-fit" />
      </div>
      <div className="flex relative sc-500:flex-wrap mt-20 sc-630:py-10">
        <div className="bg-white flex flex-col gap-4 rounded-l sc-500:rounded sc-630:w-full w-fit h-fit p-4">
          <Title className="w-max" title='What our clients say?' />
          <Description className='font-medium max-w-[200px] text-[18px]' desc='See what our clients say about their new home' />
          <Button text='See more' />
        </div>
        <div className="border-l-[20px] sc-630:hidden rounded-[0_5px_5px_0px] border-white">
          <Image src={s4img} className="rounded-[0_5px_5px_5px] h-full" alt='%$6VY2wi*(y^^67fkonwn(feffwef)ewfhihwef' />
        </div>
        <div className="absolute sc-500:rounded sc-630:max-w-full sc-630:static bottom-[-50px] w-full max-w-[300px] flex flex-col gap-3 p-4 rounded bg-gradient-to-br from-[#056088] to-[#023957] right-0">
          <Image src={s4av} alt='s4av' className="w-[70px] h-[70px]" />
          <Description className='font-medium italic text-white' desc='I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.' />
          <Description className='text-white italic' desc='- Mr. Roberto' />
        </div>
      </div>
    </Section>
    <div className="px-[10px]">
      <div className="flex my-32 flex-wrap gap-4 mb-10 justify-between">
        <Title title='Our Partners' />
        {['J.construct', 'Arch', 'Whix.co', 'DZIKRA'].map((com, i) => <p className="text-2xl text-gray-600" key={i}>
          {com}
        </p>)}
      </div>
      <Image src={vid} alt="vid" className="rounded mx-auto w-full my-10 cursor-pointer active:scale-95 duration-200 select-none max-w-[1100px]" />
      <div className="flex flex-col px-[10px] items-center gap-4 py-20 px-10px w-full max-w-[1100px] mx-auto rounded" style={{ backgroundImage: 'url("/assets/img/image copy 6.png")' }}>
        <p className="text-center max-w-[500px] text-white text-5xl sc-830:text-4xl sc-630:text-3xl sc-450:text-2xl">Want to get our offer updates and news?</p>
        <p className="text-white max-w-[600px] text-center">Submit your e-mail and we will give you update about information and discount. Every single week. (not spamming)</p>
        <div className="w-full flex max-w-[500px]">
          <input type="email" className="w-full pl-4 rounded-l outline-none focus-within:bg-white bg-slate-200" placeholder="Enter your e-mail here" />
          <Button text='Submit' className='rounded-r rounded-l-none' />
        </div>
      </div>
    </div>
  </div>);
}
