export default function Title({ title, className = '' }) {
    return <p className={"text-2xl text-[#056088] " + className}>{title}</p>
}