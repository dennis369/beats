import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { RiAncientGateFill } from 'react-icons/ri'
import { GiWolfTrap, GiRock, GiBanjo } from 'react-icons/gi';
import { FaGuitar } from 'react-icons/fa';
import { GiMicrophone } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { SiMumble } from 'react-icons/si';


function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1>Categories</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/properties">
                <Button variant="dark" id="properties"><RiAncientGateFill />Old school</Button>{' '}
            </Link>
            <Link to="/categories/auto">
                <Button variant="dark" id="auto"><FaGuitar />Jazz rap</Button>{' '}
            </Link>
            <Link to="/categories/home">
                <Button variant="dark" id="home"><GiWolfTrap />Trap</Button>{' '}
            </Link>
            <Link to="/categories/electronics">
                <Button variant="dark" id="electronics"><SiMumble />Mumble rap</Button>{' '}
            </Link>
            <Link to="/categories/clothes">
                <Button variant="dark" id="clothes"><GiRock/>Rap rock</Button>{' '}
            </Link>
            <Link to="/categories/toys">
                <Button variant="dark" id="toys"><GiBanjo />Country trap</Button>{' '}
            </Link>
            <Link to="/categories/garden">
                <Button variant="dark" id="garden"><GiMicrophone />Gangsta rap</Button>{' '}
            </Link>
        </div>
    )
}

export default CategoriesNav;