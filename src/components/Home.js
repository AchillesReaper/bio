import './Home.css'
import Introduction from './Introduction';
import CoreSkill from './CoreSkill';
import TimeLine from './Timeline';

export default function Home() {

    return (
        <div>
            <div id='my-name' className='home-container'>
                <h1>Donald Ho</h1>
            </div>
            <section id='profile'>
                <div id='introduction' className='home-container'>
                    <Introduction />
                </div>

                <div id='core-skills' className='home-container'>
                    <CoreSkill />
                </div>

            </section>

            <section id='time-line' className='home-container'>
                <TimeLine />
            </section>

        </div>

    )
}