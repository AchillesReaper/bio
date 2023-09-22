import React from "react"
export default function AcademicTable({ certs, onPreviewClick }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>University</td>
                    <td>Course</td>
                    <td>Testmonial</td>
                </tr>
            </thead>
            <tbody>
                {certs.map((cert, index) => (
                    <tr key={index}>
                        <td>{cert.school}</td>
                        <td>{cert.course}</td>
                        <td>
                            <button onClick={() => onPreviewClick(cert)}>{cert.description}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}