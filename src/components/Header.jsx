

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-gray-950">
            <nav className="ml-auto flex gap-4 sm:gap-6 teste">
                <a href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                </a>
                <a href="/financial" className="text-sm font-medium hover:underline underline-offset-4">
                    Financeiro
                </a>
                <a href="/stock" className="text-sm font-medium hover:underline underline-offset-4">
                    Estoque
                </a>
            </nav>
        </header>
    )
}
