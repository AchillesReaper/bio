import { useState, useEffect } from "react"
import AcademicTable from "./AcademicTable"
import AcademicPreviewer from "./AcademicPreviewer";

const certs = [
    { name: 'mitCert', course: 'Master of IT', school: 'UTS', description: 'Graduation Certificate' },
    { name: 'mitTrans', course: 'Master of IT', school: 'UTS', description: 'Academic Transcript' },
    { name: 'mitDean2022', course: 'Master of IT', school: 'UTS', description: "Dean's List 2022" },
    { name: 'mitDean2023', course: 'Master of IT', school: 'UTS', description: "Dean's List 2023" },
    { name: 'bbCert', course: 'Bachelor of Business', school: 'UTS', description: 'Graduation Certificate' },
];

export default function Academic() {
    const [selectedCert, setSelectedCert] = useState(null)

    const handlePreviewClick = (cert) => {
        setSelectedCert(cert)
    }

    useEffect(() => {

        console.log({ selectedCert }, 'is selected')
    }, [selectedCert])


    return (
        <div>
            <AcademicTable certs={certs} onPreviewClick={handlePreviewClick} />
            {selectedCert ? <AcademicPreviewer cert={selectedCert}/> : null}
        </div>
    )
}