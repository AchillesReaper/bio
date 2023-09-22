import React from "react"
export default function CertificateTable({ certs, onPreviewClick }) {
    return (
        <div>
            <table className="table">
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


        </div>
    )
}