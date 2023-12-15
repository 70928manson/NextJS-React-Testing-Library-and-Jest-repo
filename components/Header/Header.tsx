
interface IHeader {
    title: string
}

export default function Header({ title }: IHeader) {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
                Header
            </div>
        </nav>
    )
}