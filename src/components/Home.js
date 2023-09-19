import './Home.css'
import Introduction from './Introduction';
import CoreSkill from './CoreSkill';
import TimeLine from './TimeLine';

export default function Home() {

    return (
        <div id='home-component'>
            <h1>Donald Ho</h1>
            <section id='profile'>
                <div id='introduction'>
                    <Introduction />
                </div>

                <div id='core-skills'>
                    <CoreSkill />
                </div>

            </section>

            <section id='time-line'>
                <TimeLine />
            </section>

        </div>

    )
}