import { Component } from 'react';
import { ReviewType } from '../App/App';
import './ReviewCard.scss'

type Props = {
  review: ReviewType
};

class ReviewCard extends Component<Props> {
  render() {
    return (
      <article className="review-card">
        <h3 className="review-card__name">{this.props.review.name}</h3>
        <span className="review-card__date">{this.props.review.date}</span>
        <p className="review-card__review">{this.props.review.review}</p>
      </article>
    );
  }
}

export default ReviewCard;
