import { createSlice } from '@reduxjs/toolkit';
import reviews from '../../data.json';

function getRuReviews() {
  const objReviews = reviews.ru;
  let indexReview = 0;
  let ruReviews = [];

  for (const client of Object.values(objReviews)) {
    const { name, review, date } = client;
    const newReview = { id: indexReview, name: name, review: review, date: date };
    ruReviews.push(newReview);

    indexReview++;
  }

  return ruReviews;
}

function getEnReviews() {
  const objReviews = reviews.en;
  let indexReview = 0;
  let enReviews = [];

  for (const client of Object.values(objReviews)) {
    const { name, review, date } = client;
    const newReview = { id: indexReview, name: name, review: review, date: date };
    enReviews.push(newReview);

    indexReview++;
  }

  return enReviews;
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    ruReviews: getRuReviews(),
    enReviews: getEnReviews(),
    displayedReviews: [],
  },
  reducers: {
  },
});

export default reviewsSlice.reducer;
