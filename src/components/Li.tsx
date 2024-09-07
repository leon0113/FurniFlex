

export default function Li({ name }: { name: string }) {
    return (
        <li>
            <a rel="noopener noreferrer" href="#" className="hover:dark:text-gray-600 text-gray-400 font-medium">{name}</a>
        </li>
    )
}
