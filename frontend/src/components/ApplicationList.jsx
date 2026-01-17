import ApplicationItem from "./ApplicationItem";

function ApplicationList({ applications, refresh }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                <tr>
                    <th>Candidate</th>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {applications.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center text-muted">
                            No applications yet
                        </td>
                    </tr>
                ) : (
                    applications.map((app) => (
                        <ApplicationItem
                            key={app.id}
                            application={app}
                            refresh={refresh}
                        />
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ApplicationList;
