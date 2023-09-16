import './Home.css'
import sun from '../assets/img/sun.png'
export default function Home() {
    return (
        <div id='home-component'>
            <h1>Donald Ho</h1>
            <section className='profile'>
                <div id='introduction'>
                    {/* <p>
                        Resposible professional with excellent problem-solving skills looking for a position as a software developer.
                        Strong learning ability and experience in developing appications.
                    </p> */}
                    <table>
                        <tr>
                            <td className='top-left-align'><b>Education: </b></td>
                            <td>
                                Master of IT, University of Technology Sydney<br></br>
                                <em><u>major in software development</u></em>, <br></br>
                                Graduated @ 2023 <b>GPA:6.88/7</b></td>
                        </tr>
                        <tr>
                            <td className='top-left-align'><b>Introduction: </b></td>
                            <td>
                                Enthusiastic and motivated professional with front end software development skills  seeking to pursue a long term career in software development. Ability to critically think, problem solve and effectively communicate ideas and solutions. Experienced and passionate towards enhancing software performance to drive continuous process improvement and contribute to the overall growth of an organisation.
                            </td>
                        </tr>
                    </table>
                    {/* <p>
                         Master of IT, <em>major in software development</em>, University of Technology Sydney @ 2023
                    </p> */}

                </div>

                <div id='core-skill'>
                </div>

            </section>
            
            <section id='time-line'>

            </section>
            <div id='other-tach'>
                <p></p>
            </div>



        </div>
        // <header className="App-header">
        //     <img src={sun} className="App-logo" alt="logo" />
        //     <p>
        //         Hi My name is Donald <br></br>
        //         I just graduated from UTS <br></br>
        //         I am pursueing the career path to become a full-stack developer <br></br>
        //     </p>
        //     <p>

        //     </p>
        //     <a className='App-link' href='https://achillesreaper.github.io/Car-Rental/' target='_blank' rel="noopener noreferrer"> Car Rental Platform</a>
        //   </header>
      )
}