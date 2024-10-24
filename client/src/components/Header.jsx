import logo from './assets/logo.jpg';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-2'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='nav-bar-logo d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>Project Management system</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
