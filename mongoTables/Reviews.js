import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
  hotelId: {
    type: Number,
    required: true
    //ref: 'Hotel' // Reference to the 'Hotels' collection/table
  },
  reviewerName: {
    type: String,
    required: true,
    maxlength: 40
  },
  reviewText: String,
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  reviewRating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  }
});

const Reviews = mongoose.model('Reviews', reviewsSchema);
export {Reviews};
