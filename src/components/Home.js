import Introduction from './Introduction';
import CoreSkill from './CoreSkill';
import Timeline from './Timeline';

export default function Home() {

    return (
        <div id='home-page'>
            <div className='banner'>
                <h2>Donald Ho</h2>
            </div>
            <section id='profile'>
                <div id='introduction' className='page-container'>
                    <Introduction />
                </div>

                <div id='core-skills' className='page-container'>
                    <CoreSkill />
                </div>

            </section>

            <section id='time-line' className='page-container'>
                <Timeline />
            </section>

        </div>

    )
}