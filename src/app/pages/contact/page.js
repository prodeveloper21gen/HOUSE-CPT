import Button from "@/app/components/button/Button";
import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Title from "@/app/components/title/Title";
import Image from "next/image";

import img1 from "@/app/assets/img/image copy 13.png"

const grid = { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }

const inpS = 'rounded p-3 outline-none'

export default function Contact() {
    return (<div>
        <HeroSection className='py-32 bg-image' title='Need some consultation or want to collaborarion with us? Let’s connect!' />
        <div className="px-[10px]">
            <div className="grid" style={grid}>
                <Image src={img1} className="rounded h-full" alt='sec1 img' />
                <div className="flex flex-col rounded h-full bg-slate-100 gap-5">
                    <div className="w-full max-w-[90%] gap-4 h-full flex flex-col py-3 mx-auto">
                        <Title title='Let’s talk about anything you need' />
                        <div className="gap-4 grid grid-cols-2 sc-500:grid-cols-1 justify-between">
                            <input type="text" className={inpS} placeholder="Your name/company name" />
                            <input type="text" className={inpS} placeholder="Phone/E-mail" />
                        </div>
                        <textarea placeholder="Message" className={"resize-none w-full h-44 " + inpS} />
                        <Button text='Submit' className="h-fit" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-20 w-fit mx-auto">
                <Title title='Or contact us via e-mails or even mobile call or Whatsapp messages' />
                <div className="flex justify-center gap-4">
                    <Button text='E-mails' />
                    <Button text='Whatsapp' />
                    <Button text='Message' />
                </div>
            </div>
        </div>
    </div>);
}