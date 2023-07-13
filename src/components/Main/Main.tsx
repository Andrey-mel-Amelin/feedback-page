import { Component } from 'react';
import FeedbackList from '../ReviewList/ReviewsList';
import './Main.scss';
import { ReviewType } from '../App/App';

type Props = {
  reviews: () => ReviewType[];
  displayedReviews: () => ReviewType[];
  quantityDisplayedReviews: number;
  onQuantityDisplayedReviews: (quantity: number) => void;
};

class Main extends Component<Props> {
  render() {
    return (
      <main className="main">
        <div className="main__button-box">
          <button onClick={() => this.props.onQuantityDisplayedReviews(5)} className="main__button">
            min
          </button>
          <button onClick={() => this.props.onQuantityDisplayedReviews(10)} className="main__button">
            middle
          </button>
          <button onClick={() => this.props.onQuantityDisplayedReviews(-1)} className="main__button">
            max
          </button>
        </div>

        <FeedbackList reviews={this.props.reviews} />

        {this.props.displayedReviews().length >= this.props.quantityDisplayedReviews && (
          <button
            className="main__button"
            onClick={() => this.props.onQuantityDisplayedReviews(this.props.quantityDisplayedReviews + 5)}
          >
            more
          </button>
        )}
      </main>
    );
  }
}

export default Main;
