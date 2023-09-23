import React from "react"
export default function CertificateTable({ type, certs, onPreviewClick }) {
    let displayTable;
    switch (type) {
        case 'edu':
            displayTable = <table className="table text-nowrap">
                <thead>
                    <tr>
                        <th scope="col">University</th>
                        <th scope="col">Course</th>
                        <th scope="col">Testmonial</th>
                    </tr>
                </thead>
                <tbody>
                    {certs.map((cert, index) => (
                        <tr key={index}>
                            <td className="text-center">{cert.school}</td>
                            <td className="text-center">{cert.course}</td>
                            <td className="text-center">
                                <a href="#" onClick={() => onPreviewClick(cert)}>{cert.description}</a>
                                {/* <button onClick={() => onPreviewClick(cert)}>{cert.description}</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            break;

        case 'cpt':
            displayTable = <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Organisation</th>
                        <th scope="col">Course</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {certs.map((cert, index) => (
                        <tr key={index}>
                            <td className="text-center text-nowrap">{cert.organisation}</td>
                            <td className="text-center text-nowrap"><a href={cert.description} >{cert.course}</a></td>
                            <td className="text-center text-nowrap">
                                <a href="#" onClick={() => onPreviewClick(cert)}>{cert.date}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            break;

        default:
            break;
    }

    return (
        <div className="table-responsive">

            {displayTable}

        </div >
    )
}