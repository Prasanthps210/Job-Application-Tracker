import { useEffect, useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import { getApplications } from "./services/applicationService";

function App() {
    const [applications, setApplications] = useState([]);

    const loadApplications = async () => {
        const res = await getApplications();
        setApplications(res.data);
    };

    useEffect(() => {
        loadApplications();
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="text-center mb-4 text-primary">
                        Job Application Tracker
                    </h2>

                    <ApplicationForm refresh={loadApplications} />

                    <hr />

                    <ApplicationList
                        applications={applications}
                        refresh={loadApplications}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
