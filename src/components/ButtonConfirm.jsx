export default function ({ onClick, children, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer ${className}`}
        >
            {children}
        </button>
    )
}
