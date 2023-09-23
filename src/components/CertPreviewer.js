import bbCert from '../assets/certificate/education/2009-03-16 UTS Cert_Bachelor.png'
import mitDean2022 from '../assets/certificate/education/2022 Deans List Certificates PG_HIN HANG HO.png'
import mitDean2023 from '../assets/certificate/education/2023 Deans List Certificates PG_HIN HANG HO.png'
import mitTrans from '../assets/certificate/education/2023-08-02 Graduation statement - print.png'
import mitCert from '../assets/certificate/education/2023-08-03 Master of Information Technology.png'

import metaifed from '../assets/certificate/cpt/2023-06-15 Intro Front End.png';
import metapwj from '../assets/certificate/cpt/2023-07-20 Programming with JavaScript.png';
import metavc from '../assets/certificate/cpt/2023-09-07 Version Control.png';
import metahcd from '../assets/certificate/cpt/2023-08-11  HTML and CSS in depth.png';
import metarb from '../assets/certificate/cpt/2023-08-21 React Basics.png'
import umpfe from '../assets/certificate/cpt/2023-06-29 Python for Everybody.png'
import frm from '../assets/certificate/cpt/2015-04-15 FRM.png'


export default function CertPreviewer({ cert }) {
    let displayCert;

    switch (cert.name) {
        // education certificates
        case 'bbCert':
            displayCert = <img src={bbCert} />
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

        // CPT certificates
        case 'metaifed':
            displayCert = <img src={metaifed} />
            break;
        case 'metapwj':
            displayCert = <img src={metapwj} />
            break;
        case 'metavc':
            displayCert = <img src={metavc} />
            break;
        case 'metahcd':
            displayCert = <img src={metahcd} />
            break;
        case 'metarb':
            displayCert = <img src={metarb} />
            break;
        case 'umpfe':
            displayCert = <img src={umpfe} />
            break;
        case 'frm':
            displayCert = <img src={frm} />
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

