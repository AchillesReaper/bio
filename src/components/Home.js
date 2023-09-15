import sun from '../assets/img/sun.png'
export default function Home() {
    return (
    <header className="App-header">
        <p>
            Hi My name is Donald <br></br>
            I just graduated from UTS
        </p>
        <img src={sun} className="App-logo" alt="logo" />
        <a className='App-link' href='https://achillesreaper.github.io/Car-Rental/' target='_blank' rel="noopener noreferrer"> Car Rental Platform</a>
      </header>)
}