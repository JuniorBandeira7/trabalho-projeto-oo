export default function RemoveButton({onClick}) {
    return (
        <button className="btn btn-link text-info me-2" onClick={onClick}>
            <i className="bi bi-x-circle"></i>
        </button>
    )
}