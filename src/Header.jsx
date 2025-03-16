import './Header.css'

function Header() {
    return (
        <header className='navbar'>
            <h1>Blog</h1>
            <nav>
                <ul className='navbar__menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header