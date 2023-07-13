import { Component } from 'react';
import './LanguageSelection.scss';
import { LanguageContext } from '../App/App';

class LanguageSelection extends Component {
  render() {
    return (
      <label className="language-selection">
        <div className="language-selection__wrapper">
          <LanguageContext.Consumer>
            {({ toggleLanguage }) => (
              <select onChange={toggleLanguage} className="language-selection__select">
                <option value="RU">RU</option>
                <option value="EN">EN</option>
              </select>
            )}
          </LanguageContext.Consumer>
        </div>
      </label>
    );
  }
}

export default LanguageSelection;
