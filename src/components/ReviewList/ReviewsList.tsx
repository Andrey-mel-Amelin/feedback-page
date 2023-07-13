import { Component } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { ReviewType } from '../App/App';
import './ReviewsList.scss';

type Props = {
  reviews: () => ReviewType[];
};

class ReviewsList extends Component<Props> {
  render() {
    return (
      <>
        <ul className="reviews-list">
          {this.props.reviews().map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </ul>
      </>
    );
  }
}

export default ReviewsList;
