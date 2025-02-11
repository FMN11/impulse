import { useState } from "react";
import { Navbar, Logo, Ul, Li, Button, Hamburger } from "./HeaderStyle";
import { HashLink as Link } from 'react-router-hash-link';
import logoImg from './../../img/logo.png'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return ( 
        <Navbar>
            <Logo>
                <Link to={`/`}>
                    <img src={logoImg} alt="logo" width="256" height="256"/>
                </Link>
            </Logo>
            <Ul openMenu={!openMenu}>
                <Li>
                    <Link to={`#about`}>О нас</Link>
                </Li>
                <Li>
                    <Link to={`#offert`}>Залы</Link>
                </Li>
                <Li>
                    <Link to={`#gallery`}>Работы</Link>
                </Li>
                <Li>
                    <Link to={`#pricelist`}>Услуги</Link>
                </Li>
                <Button as={Link} to={`#contact`}>
                    Контакт
                </Button>
            </Ul>
            <Hamburger onClick={toggleMenu}>☰</Hamburger>
        </Navbar>
     );
}

export default Header;