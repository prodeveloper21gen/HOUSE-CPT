import HeroSection from "@/app/components/heroSection/HeroSection";
import Image from "next/image";
import img1 from "@/app/assets/img/image copy 5.png"
import img2 from "@/app/assets/img/image copy 7.png"
import Title from "@/app/components/title/Title";
import Description from "@/app/components/description/Description";

const desc = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

const grid = { gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }

export default function About() {
    return (<div>
        <HeroSection className='py-32' title='About our story - We are the best team' />
        <div className="px-[10px]">
            <div className="grid items-center gap-4 my-10" style={grid}>
                <Image src={img1} className="rounded" alt='sec1 img' />
                <div className="flex flex-col gap-5">
                    <Title title='Here were the story begins' />
                    <div className="flex flex-col gap-8">
                        <Description desc={desc} />
                        <Description desc={desc} />
                    </div>
                </div>
            </div>
        </div>
        <div className="grid items-center gap-4 p-4 bg-cover bg-center rounded" style={{ ...grid, backgroundImage: 'url("/assets/img/image copy 8.png")' }}>
            <div className="flex flex-col gap-5">
                <Title className="text-white" title='We love to make perfect   home' />
                <Description className="text-white font-medium" desc={desc} />
            </div>
            <Image src={img2} className="rounded" alt='sec1 img' />
        </div>
    </div>)
}