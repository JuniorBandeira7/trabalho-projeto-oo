export default function EditButton({onClick}) {
    return (
        <button className="btn btn-link text-info me-2" onClick={onClick}>
            <i className="bi bi-pencil-square"></i>
        </button>
    )
}