import {Hotels} from "../mongoTables/Hotels.js";
import {Reviews} from "../mongoTables/Reviews.js";

export async function countAllHotelsNoSQL() {
    return Hotels.countDocuments();
}

export async function countAllReviewsNoSQL() {
    return Reviews.countDocuments();
}

export async function createOneHotelNoSQL(name) {
    return Hotels.create({
        name: name,
        description: 'desc text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
        address: 'address1',
        phone: 'phone1',
        typeId: 2
    });
}

export async function createMultipleHotelsNoSQL() {
    const newHotels = [];
    for (let i = 0; i < 5000; i++) {
        newHotels.push({
            name: `Hotel number ${i}`,
            description: 'desc text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
            address: 'address1',
            phone: 'phone1',
            typeId: 2
        });
    }
    return Hotels.insertMany(newHotels);
}

export async function createOneReviewNoSQL(reviewerName) {
    return Reviews.create({
        hotelId: 3,
        reviewerName: reviewerName,
        reviewText: 'review text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
        createdAt: new Date(),
        reviewRating: 5
    });
}

export async function createMultipleReviewsNoSQL() {
    const newReviews = [];

    for (let i = 0; i < 5000; i++) {
        newReviews.push({
            hotelId: 3,
            reviewerName: `Reviewer Named ${i}`,
            reviewText: 'review text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            createdAt: new Date(),
            reviewRating: 5
        });
    }

    return Reviews.insertMany(newReviews);
}

export async function getAllHotelsNoSQL() {
    return Hotels.find({});
}

export async function getAllReviewsNoSQL() {
    return Reviews.find({});
}

export async function updateAllHotelsNoSQL() {
    return Hotels.updateMany(
        { phone: 'phone1', address: 'address1' },
        {
            $set: {
                phone: 'phone2',
                address: 'address2'
            }
        }
    );
}

export async function updateAllReviewsNoSQL() {
    return Reviews.updateMany(
        { rating: 5 },
        {
            $set: {
                rating: 4
            }
        }
    );
}

export async function deleteAllHotelsNoSQL() {
    return Hotels.deleteMany({});
}

export async function deleteAllReviewsNoSQL() {
    return Reviews.deleteMany({});
}