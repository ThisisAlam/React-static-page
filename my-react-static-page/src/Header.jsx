import logo from './assets/react-logo.png'

export default function Header(){
  return (
    <header className='header'>
        <img src={logo} alt="react logo" className="logo-img" />
        <span className='react-title'>React Facts</span>
    </header>
  )
}