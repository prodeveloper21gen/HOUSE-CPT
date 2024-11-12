export default function Description({ desc, className = '' }) {
    return <p className={"text-gray-600 " + className}>{desc}</p>
}