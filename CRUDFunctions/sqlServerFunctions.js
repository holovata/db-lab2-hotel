import { poolPromise } from '../sqlServerConnection.js';

export async function countAllHotelsSQLServer() {
    try {
        const result = await poolPromise.query`SELECT COUNT(*) AS total_hotels FROM Hotels`;
        return result.recordset[0].total_hotels;
    } catch (error) {
        console.error('Error counting hotels:', error);
        throw error;
    }
}

export async function countAllReviewsSQLServer() {
    try {
        const result = await poolPromise.query`SELECT COUNT(*) AS total_reviews FROM Reviews`;
        return result.recordset[0].total_reviews;
    } catch (error) {
        console.error('Error counting reviews:', error);
        throw error;
    }
}

export async function createOneHotelSQLServer(name) {
    try {
        const query = `INSERT INTO Hotels (name, description, address, phone, typeId) VALUES ('${name}', 'desc text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ', 'address1', 'phone1', 2)`;
        await poolPromise.query(query);
        return 'Successfully created a hotel';
    } catch (error) {
        console.error('Error creating hotel:', error);
        throw error;
    }
}

export async function createMultipleHotelsSQLServer(hotelsData) {
    try {
        const transaction = new poolPromise.Transaction();
        await transaction.begin();

        const values = hotelsData
            .map(hotel => `('${hotel.name}', '${hotel.description}', '${hotel.address}', '${hotel.phone}', ${hotel.typeId})`)
            .join(',');
        const query = `INSERT INTO Hotels (name, description, address, phone, typeId) VALUES ${values}`;

        await transaction.request().query(query);
        await transaction.commit();
        return 'Successfully created hotels';
    } catch (error) {
        console.error('Error creating hotels:', error);
        throw error;
    }
}

export async function createOneReviewSQLServer(reviewerName) {
    try {
        const createdAt = new Date().toISOString();
        const query = `INSERT INTO Reviews (hotelId, reviewerName, reviewText, createdAt, reviewRating) VALUES (3, '${reviewerName}', 'review text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text', '${new Date()}', 5)`;
        await poolPromise.query(query);
        return 'Successfully created a review';
    } catch (error) {
        console.error('Error creating review:', error);
        throw error;
    }
}

export async function createMultipleReviewsSQLServer(reviewsData) {
    try {
        const transaction = new poolPromise.Transaction();
        await transaction.begin();

        const values = reviewsData
            .map(review => `(${review.hotelId}, '${review.reviewerName}', '${review.reviewText}', '${review.createdAt.toISOString()}', ${review.reviewRating})`)
            .join(',');
        const query = `INSERT INTO Reviews (hotelId, reviewerName, reviewText, createdAt, reviewRating) VALUES ${values}`;

        await transaction.request().query(query);
        await transaction.commit();
        return 'Successfully created reviews';
    } catch (error) {
        console.error('Error creating reviews:', error);
        throw error;
    }
}

export async function getAllHotelsSQLServer() {
    try {
        const result = await poolPromise.query`SELECT * FROM Hotels`;
        return result.recordset;
    } catch (error) {
        console.error('Error fetching all hotels:', error);
        throw error;
    }
}

export async function getAllReviewsSQLServer() {
    try {
        const result = await poolPromise.query`SELECT * FROM Reviews`;
        return result.recordset;
    } catch (error) {
        console.error('Error fetching all reviews:', error);
        throw error;
    }
}

export async function updateAllHotelsSQLServer() {
    try {
        const query = `UPDATE Hotels SET typeId = 3 WHERE typeId = 2`;
        await poolPromise.query(query);
        return query.recordset;
    } catch (error) {
        console.error('Error updating hotels:', error);
        throw error;
    }
}

export async function updateAllReviewsSQLServer() {
    try {
        const query = `UPDATE Reviews SET reviewRating = 4 WHERE reviewRating = 5`;
        await poolPromise.query(query);
        return query.recordset;
    } catch (error) {
        console.error('Error updating reviews:', error);
        throw error;
    }
}

export async function deleteAllHotelsSQLServer() {
    try {
        const query = `DELETE FROM Hotels`;
        await poolPromise.query(query);
        return query.recordset;
    } catch (error) {
        console.error('Error deleting all hotels:', error);
        throw error;
    }
}

export async function deleteAllReviewsSQLServer() {
    try {
        const query = `DELETE FROM Reviews`;
        await poolPromise.query(query);
        return query.recordset;
    } catch (error) {
        console.error('Error deleting all reviews:', error);
        throw error;
    }
}