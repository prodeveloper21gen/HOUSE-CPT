import Button from "../button/Button"

const HeroSection = ({ title, desc, button, className = "" }) => {
    return (<div style={{backgroundImage: 'url("/assets/img/imagecopy6.png")'}} className={"bgImg flex flex-col gap-5 mb-20 pb-20 py-10 pt-32 items-center " + className}>
        {title &&
            <h1 style={{textShadow:'0 100px 200px black'}} className="text-5xl sc-830:text-4xl sc-630:text-3xl sc-450:text-2xl text-white font-bold text-center max-w-[700px]">{title}</h1>
        }
        {desc &&
            <h1 className="text-md text-white font-bold text-center max-w-[500px]">{desc}</h1>
        }
        {button &&
            <Button text={button} />
        }
    </div>)
}

export default HeroSection