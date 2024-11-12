import Description from "@/app/components/description/Description";
import HeroSection from "@/app/components/heroSection/HeroSection";
import Title from "@/app/components/title/Title";
import Button from "@/app/components/button/Button";

const cards = [
    { title: 'Senior architect' },
    { title: 'Head of constructions' },
    { title: 'Drafter' },
    { title: 'UI/UX Designer' },
    { title: 'Driver' },
    { title: 'Designer' },
    { title: 'Web developer' },
    { title: 'Interior designer' },
    { title: 'Real estate house' },
]

export default function Career() {
    return (
        <div>
            <HeroSection className="py-32 bg-image" title="Here are some of our best works" />
            <div className="px-4 py-16">
                <div className="grid gap-8">
                    <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }} className="grid gap-8">
                        {cards.map((card, i) => (
                            <div key={i} className="bg-white rounded shadow-slate-400 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                                <div className="p-6 flex flex-col gap-5">
                                    <Title title={card.title} />
                                    <h1 className="flex gap-2">
                                        ⌚<Description desc="5+ years experience" />
                                    </h1>
                                    <h1 className="flex gap-2">
                                        👜<Description desc="Full-time" />
                                    </h1>
                                    <h1 className="flex gap-2">
                                        💵<Description desc="$9000/month" />
                                    </h1>
                                    <Button text='Details' />
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
