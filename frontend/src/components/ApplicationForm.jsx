import { useState } from "react";
import { addApplication } from "../services/applicationService";

function ApplicationForm({ refresh }) {
    const [form, setForm] = useState({
        candidateName: "",
        company: "",
        role: "",
        status: "Applied",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addApplication(form);
        refresh();
        setForm({
            candidateName: "",
            company: "",
            role: "",
            status: "Applied",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    name="candidateName"
                    placeholder="Candidate Name"
                    value={form.candidateName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    name="company"
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    name="role"
                    placeholder="Role"
                    value={form.role}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="col-md-2">
                <select
                    className="form-select"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            <div className="col-md-1 d-grid">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    );
}

export default ApplicationForm;
