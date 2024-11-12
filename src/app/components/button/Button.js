const Button = ({ text, className }) => {
    return (<button className={"bg-gradient-to-r from-[#056088] w-fit active:scale-95 text-white font-medium px-8 py-5 text-md rounded to-[#09A7CA] " + className}> {text} </button>)
}

export default Button