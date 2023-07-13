import { Link } from 'react-router-dom';
import { Component } from 'react';
import Clock from '../Clock/Clock';
import LanguageSelection from '../LanguageSelection/LanguageSelection';
import './Header.scss'

class Header extends Component {
  render() {
    return (
    <header className="header">
        <Link to='/' className='header__logo'></Link>
        <Clock />
        <LanguageSelection />
    </header >
  )
  };
}

export default Header;
