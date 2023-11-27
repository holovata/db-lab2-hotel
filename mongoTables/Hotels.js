import mongoose from 'mongoose';

const hotelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  description: String,
  address: {
    type: String,
    required: true,
    maxlength: 255
  },
  phone: {
    type: String,
    maxlength: 20
  },
  typeId: {
    type: Number,
    required: true
  //  ref: 'HotelType' // Reference to the 'HotelTypes' collection/table
  }
});

// Create the Hotels model using the schema
const Hotels = mongoose.model('Hotels', hotelsSchema);
export {Hotels};