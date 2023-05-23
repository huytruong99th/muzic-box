import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='logo-btn-container' onClick={() => window.scrollTo(0, 0)}>
                  <Link to="/" className="navbar-logo">
                      <span>MuzicBox</span> <svg class="logo-main" xmlns="http://www.w3.org/2000/svg" id="Solid" height="32" viewBox="0 0 64 64" width="32"><path d="m59.13 37.28-15 2.5a2.251 2.251 0 0 0 -1.88 2.22v13.325a3.75 3.75 0 1 0 4.5 3.675v-10.9l10.5-1.969v6.192a3.75 3.75 0 1 0 4.5 3.677v-16.5a2.25 2.25 0 0 0 -2.62-2.22z"/><path d="m7 28.749a3.75 3.75 0 0 0 3.75-3.749v-10.9l9.388-1.761a.749.749 0 0 0 .612-.737v-6.602a.75.75 0 0 0 -.873-.74l-11.747 1.958a2.243 2.243 0 0 0 -1.88 2.22v12.887a3.75 3.75 0 0 0 .75 7.424z"/><path d="m29 33.237-1.414 1.414a1.25 1.25 0 0 0 1.768 1.768l1.414-1.414a1.25 1.25 0 0 0 -1.768-1.768z"/><path d="m25.859 36.373-2.521 2.521a1.25 1.25 0 0 0 1.768 1.768l2.521-2.521a2.636 2.636 0 0 1 -1.768-1.768z"/><path d="m61.652 9.864-7.516-7.516a3.746 3.746 0 0 0 -4.994-.277l-10.342 8.274 14.855 14.855 8.274-10.343a3.746 3.746 0 0 0 -.277-4.993z"/><path d="m53.651 28.38a.75.75 0 0 0 0-1.061l-16.97-16.97a.75.75 0 0 0 -1.061 0l-2.3 2.3 18.033 18.029z"/><path d="m2.232 53.455a3.743 3.743 0 0 0 .117 5.181l3.015 3.015a3.743 3.743 0 0 0 5.181.117l3.265-2.984-8.594-8.594z"/><path d="m30.106 22.956 10.938 10.938 4.209.42a4.727 4.727 0 0 0 3.831-1.367l1.209-1.208-18.032-18.032-1.208 1.209a4.727 4.727 0 0 0 -1.367 3.831z"/><path d="m29.093 24.064-22.864 25.018 8.689 8.689 25.018-22.864zm-2.926 17.658a2.75 2.75 0 1 1 -3.889-3.889l5.657-5.657a2.75 2.75 0 0 1 3.889 3.889z"/></svg>
                  </Link>
                  {!button && <Button buttonStyle='btn--glow--outline' path='/dat-phong'>ĐẶT PHÒNG</Button>}
                </div>
                <div className="menu-icon" onClick={handleClick}>
                 { click ?
                  <svg class="svg-i" xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 320.591 320.591" height="32" viewBox="0 0 320.591 320.591" width="32"><g><g id="close_1_"><path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z"/><path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z"/></g></g></svg>
                  :
                  <svg class="svg-i" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" height="32" viewBox="0 0 32 32" width="32"><g id="Layer_1"><path d="m29 8h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"/><path d="m29 28h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"/><path d="m29 18h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"/></g></svg>  
                 }
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item" onClick={() => window.scrollTo(0, 0)}>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                      Trang Chủ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/gioi-thieu" className="nav-links" onClick={closeMobileMenu}>
                      Giới Thiệu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tuyen-dung" className="nav-links" onClick={closeMobileMenu}>
                      Tuyển Dụng
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/lien-he" className="nav-links" onClick={closeMobileMenu}>
                      Liên Hệ
                    </Link>
                  </li>
              
                </ul>
                {button && <Button buttonStyle='btn--glow' onClick={() => window.scrollTo(0, 0)} path='/dat-phong'>ĐẶT PHÒNG</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar