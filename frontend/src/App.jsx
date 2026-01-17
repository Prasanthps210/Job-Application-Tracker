import { useEffect, useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import { getApplications } from "./services/applicationService";

function App() {
    const [applications, setApplications] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const loadApplications = async () => {
        const res = await getApplications();
        setApplications(res.data);
    };

    useEffect(() => {
        loadApplications();
    }, []);

    // Counters
    const total = applications.length;
    const applied = applications.filter(a => a.status === "Applied").length;
    const interview = applications.filter(a => a.status === "Interview").length;
    const rejected = applications.filter(a => a.status === "Rejected").length;

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">
                <div className="card shadow-lg">
                    <div className="card-body p-5">

                        <h2 className="text-center mb-4 text-primary">
                            Job Application Tracker
                        </h2>

                        {/* Counters */}
                        <div className="d-flex justify-content-around mb-4">
                            <span className="badge bg-primary">Total: {total}</span>
                            <span className="badge bg-warning text-dark">Applied: {applied}</span>
                            <span className="badge bg-success">Interview: {interview}</span>
                            <span className="badge bg-danger">Rejected: {rejected}</span>
                        </div>

                        {/* Form */}
                        <div className="card p-4 shadow-sm mb-4">
                            <ApplicationForm refresh={loadApplications} />
                        </div>

                        {/* Search + Status Filter */}
                        <div className="row mb-4">
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by candidate name..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="col-md-4">
                                <select
                                    className="form-select"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="All">All Status</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Interview">Interview</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                        </div>

                        {/* Table */}
                        <ApplicationList
                            applications={applications}
                            refresh={loadApplications}
                            search={search}
                            statusFilter={statusFilter}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
