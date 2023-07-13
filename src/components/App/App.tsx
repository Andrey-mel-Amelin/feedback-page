import { Component, createContext } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { store } from '../../redux';

export let language = {
  RU: 'RU',
  EN: 'EN',
};

export type ReviewType = {
  id: number;
  name: string;
  review: string;
  date: string;
};

export const LanguageContext = createContext({
  language: language.RU,
  toggleLanguage: () => {},
});

type State = {
  language: string;
  toggleLanguage: () => void;
  currentLanguageReviews: () => ReviewType[];
  quantityDisplayedReviews: number;
  displayedReviews: () => ReviewType[];
};

class App extends Component<{}, State> {
  private toggleLanguage;
  private currentLanguageReviews;
  private displayedReviews;
  private quantityDisplayedReviews;

  constructor(props: any) {
    super(props);

    this.toggleLanguage = () => {
      this.setState((state) => ({
        language: state.language === language.RU ? language.EN : language.RU,
      }));
    };

    this.currentLanguageReviews = (): ReviewType[] => {
      return this.state.language === language.RU
        ? store.getState().reviews.ruReviews
        : store.getState().reviews.enReviews;
    };

    this.displayedReviews = () => {
      if (this.state.quantityDisplayedReviews === -1) {
        return this.state.currentLanguageReviews();
      }
      return this.state.currentLanguageReviews().slice(0, this.state.quantityDisplayedReviews)
    }

    this.quantityDisplayedReviews = (quantity: number) => {
      this.setState(() => ({
        quantityDisplayedReviews: quantity
      }))
    }

    this.state = {
      language: language.RU,
      toggleLanguage: this.toggleLanguage,
      currentLanguageReviews: this.currentLanguageReviews,
      quantityDisplayedReviews: 10,
      displayedReviews: this.displayedReviews,
    };
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <Header />
        <Main
          reviews={this.state.displayedReviews}
          displayedReviews={this.state.displayedReviews}
          quantityDisplayedReviews={this.state.quantityDisplayedReviews}
          onQuantityDisplayedReviews={this.quantityDisplayedReviews}
        />
      </LanguageContext.Provider>
    );
  }
}

export default App;
