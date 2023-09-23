import bbcert from '../assets/certificate/education/2009-03-16 UTS Cert_Bachelor.png'
import mitDean2022 from '../assets/certificate/education/2022 Deans List Certificates PG_HIN HANG HO.png'
import mitDean2023 from '../assets/certificate/education/2023 Deans List Certificates PG_HIN HANG HO.png'
import mitTrans from '../assets/certificate/education/2023-08-01 Academic Transcript.png'
import mitCert from '../assets/certificate/education/2023-08-03 Master of Information Technology.png'


export default function AcademicPreviewer({ cert }) {
    let displayCert;

    switch (cert.name) {
        case 'bbcert':
            displayCert = <img src={bbcert} />
            break;
        case 'mitDean2022':
            displayCert = <img src={mitDean2022} />
            break;
        case 'mitDean2023':
            displayCert = <img src={mitDean2023} />
            break;
        case 'mitTrans':
            displayCert = <img src={mitTrans} />
            break;
        case 'mitCert':
            displayCert = <img src={mitCert} />
            break;


        default:
            break;
    }

    return (
        <div id='cert-display-frame'>
            {displayCert}
        </div>

    )
}

