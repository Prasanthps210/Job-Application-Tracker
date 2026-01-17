import { deleteApplication, updateApplication } from "../services/applicationService";

function ApplicationItem({ application, refresh }) {

    const handleStatusChange = async (e) => {
        const updated = { ...application, status: e.target.value };
        await updateApplication(application.id, updated);
        refresh();
    };

    const handleDelete = async () => {
        await deleteApplication(application.id);
        refresh();
    };

    return (
        <tr>
            <td>{application.candidateName}</td>
            <td>{application.company}</td>
            <td>{application.role}</td>
            <td>
                <select
                    className={`form-select ${
                        application.status === "Applied"
                            ? "border-warning"
                            : application.status === "Interview"
                                ? "border-success"
                                : "border-danger"
                    }`}
                    value={application.status}
                    onChange={handleStatusChange}
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </td>
            <td>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ApplicationItem;
