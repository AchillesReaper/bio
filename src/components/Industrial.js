import { useState, useEffect } from "react"
import CertificateTable from "./CertificateTable";
import CertPreviewer from "./CertPreviewer";


const certs = [
    { name: 'metaifed', course: 'Introduction to Front-End Development', organisation: 'Meta', date: "29 Jun 2023", description: 'https://www.coursera.org/learn/introduction-to-front-end-development/'},
    { name: 'metapwj', course: 'Programming with JavaScript', organisation: 'Meta', date: "1 Aug 2023", description: 'https://www.coursera.org/learn/programming-with-javascript/'},
    { name: 'metavc', course: 'Version Control', organisation: 'Meta', date: "07 Sep 2023", description: 'https://www.coursera.org/learn/introduction-to-version-control/' },
    { name: 'metahcd', course: 'HTML and CSS in depth', organisation: 'Meta', date: "11 Aug 2023", description: 'https://www.coursera.org/learn/html-and-css-in-depth/'},
    { name: 'metarb', course: 'React Basics', organisation: 'Meta', date: "21 Aug 2023", description: 'https://www.coursera.org/learn/react-basics/' },
    { name: 'umpfe', course: 'Python for Everybody', organisation: 'University of Michigam', date: "29 Jun 2023", description: 'https://www.coursera.org/learn/python/'},
    { name: 'frm', course: 'FRM', organisation: 'GARP', date:'15 Apr 2015', description: 'https://www.garp.org/frm' },
];

export default function Industrial() {
    const [selectedCert, setSelectedCert] = useState(null)

    const handlePreviewClick = (cert) => {
        setSelectedCert(cert)
    }

    useEffect(() => {

    }, [selectedCert])


    return (
        <div>
            <h2 className="display-10"><u>Continuous Professional Training</u></h2>
            <CertificateTable type='cpt' certs={certs} onPreviewClick={handlePreviewClick} />
            {selectedCert ? <CertPreviewer cert={selectedCert} /> : null}
        </div>
    )
}
