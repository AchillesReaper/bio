import { useState, useEffect } from "react"
import CertificateTable from "./CertificateTable";
import CertPreviewer from "./CertPreviewer";

const certs = [
    { name: 'mitCert', course: 'Master of Information Technology', school: 'UTS', description: 'Graduation Certificate' },
    { name: 'mitTrans', course: 'Master of Information Technology', school: 'UTS', description: 'Academic Transcript' },
    { name: 'mitDean2022', course: 'Master of Information Technology', school: 'UTS', description: "Dean's List 2022" },
    { name: 'mitDean2023', course: 'Master of Information Technology', school: 'UTS', description: "Dean's List 2023" },
    { name: 'bbCert', course: 'Bachelor of Business', school: 'UTS', description: 'Graduation Certificate' },
];

export default function Academic() {
    const [selectedCert, setSelectedCert] = useState(null)

    const handlePreviewClick = (cert) => {
        setSelectedCert(cert)
    }

    useEffect(() => {

    }, [selectedCert])


    return (
        <div>
            <h2 className="display-10"><u>Education</u></h2>
            <CertificateTable type='edu' certs={certs} onPreviewClick={handlePreviewClick} />
            {selectedCert ? <CertPreviewer cert={selectedCert} /> : null}
        </div>
    )
}