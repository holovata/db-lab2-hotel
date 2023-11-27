/*import {
    countAllHotelsSQLServer, countAllReviewsSQLServer,
    createOneHotelSQLServer, createOneReviewSQLServer,
    createMultipleHotelsSQLServer, createMultipleReviewsSQLServer,
    getAllHotelsSQLServer, getAllReviewsSQLServer,
    updateAllHotelsSQLServer, updateAllReviewsSQLServer,
    deleteAllHotelsSQLServer, deleteAllReviewsSQLServer
} from "./CRUDFunctions/sqlServerFunctions.js";*/
import {
    countAllHotelsNoSQL, countAllReviewsNoSQL,
    createOneHotelNoSQL, createOneReviewNoSQL,
    createMultipleHotelsNoSQL, createMultipleReviewsNoSQL,
    getAllHotelsNoSQL, getAllReviewsNoSQL,
    updateAllHotelsNoSQL, updateAllReviewsNoSQL,
    deleteAllHotelsNoSQL, deleteAllReviewsNoSQL
} from "./CRUDFunctions/mongoFunctions.js";

export async function getAllHotels(request, response) {
    try {
        let count;
        //const {isSQLServer} = request.query;
        //isSQLServer === 'true' ? count = await countAllHotelsSQLServer() : count = await countAllHotelsNoSQL();
        count = await countAllHotelsNoSQL();

        const startTime = performance.now();
        //isSQLServer === 'true' ? await getAllHotelsSQLServer() : await getAllHotelsNoSQL();
        await getAllHotelsNoSQL();
        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        response.status(200).json({ //successful response
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Hotels',
            result: `There are ${count} hotels`,
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        response.status(500).json({error: 'Something went wrong...'}); //server error
    }
}

export async function getAllReviews(request, response) {
    try {
        //const {isSQLServer} = request.query;
        let count;
        //isSQLServer === 'true' ? count = await countAllReviewsSQLServer() : count = await countAllReviewsNoSQL();
        count = await countAllReviewsNoSQL();
        const startTime = performance.now();
        //isSQLServer === 'true' ? await getAllReviewsSQLServer() : await getAllReviewsNoSQL();
        await getAllReviewsNoSQL();
        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        response.status(200).json({ //successful response
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Reviews',
            result: `There are ${count} reviews`,
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        response.status(500).json({error: 'Something went wrong...'}); //server error
    }
}

export async function createMultipleHotelsAtOnce(request, response) {
    try {
        //const {isSQLServer} = request.query;

        /*let hotelsSQL = []; //for sqlserver
        for (let i = 0; i < 5000; i++) {
            hotelsSQL.push({
                name: `Hotel number ${i}`,
                description: 'desc text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
                address: 'address1',
                phone: 'phone1',
                typeId: 2
            });
        }*/
        const startTime = performance.now();

        //isSQLServer === 'true' ? await createMultipleHotelsSQLServer(hotelsSQL) : await createMultipleHotelsNoSQL();
        await createMultipleHotelsNoSQL();

        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        response.status(201).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Hotels',
            result: '5000 hotels have been created (multiple at once)',
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        response.status(500).json({error: 'Something went wrong...'});
    }
}

export async function createMultipleHotelsConsecutive(request, result) {
    try {
        /*const {isSQLServer} = request.query;*/
        const startTime = performance.now();

        for (let i = 0; i < 5000; i++) {
            /*isSQLServer === 'true' ? await createOneHotelSQLServer(`Hotel #${i}`) : await createOneHotelNoSQL(`Hotel #${i}`);*/
            await createOneHotelNoSQL(`Hotel #${i}`);
        }

        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        result.status(201).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Hotels',
            result: '5000 hotels have been created (consecutive)',
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}

export async function createMultipleReviewsAtOnce(request, response) {
    try {
        /*const {isSQLServer} = request.query;*/

        /*let reviewsSQL = []; //for sqlserver
        for (let i = 0; i < 5000; i++) {
            reviewsSQL.push({
                hotelId: 3,
                reviewerName: `Reviewer named ${i}`,
                reviewText: 'review text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
                createdAt: new Date(),
                reviewRating: 5
            });
        }*/
        const startTime = performance.now();

        /*isSQLServer === 'true' ? await createMultipleReviewsSQLServer(reviewsSQL) : await createMultipleReviewsNoSQL();*/
        await createMultipleReviewsNoSQL();

        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        response.status(201).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Reviews',
            result: '5000 reviews have been created (multiple at once)',
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        response.status(500).json({error: 'Something went wrong...'});
    }
}

export async function createMultipleReviewsConsecutive(request, result) {
    try {
        //const {isSQLServer} = request.query;
        const startTime = performance.now();

        for (let i = 0; i < 5000; i++) {
            /*isSQLServer === 'true' ? await createOneReviewSQLServer(`Reviewer named ${i}`) : await createOneReviewNoSQL(`Reviewer named ${i}`);*/
            await createOneReviewNoSQL(`Reviewer named ${i}`);
        }

        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        result.status(201).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Reviews',
            result: '5000 reviews have been created (consecutive)',
            time: `${endTime - startTime} milliseconds`
        });

    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}

export async function deleteAllHotels(request, result) {
    try {
        //const {isSQLServer} = request.query;
        let count;
        //isSQLServer === 'true' ? count = await countAllHotelsSQLServer() : count = await countAllHotelsNoSQL();
        count = await countAllHotelsNoSQL();
        const startTime = performance.now();
        //isSQLServer === 'true' ? await deleteAllHotelsSQLServer() : await deleteAllHotelsNoSQL();
        await deleteAllHotelsNoSQL();
        const endTime = performance.now();

        console.log(`Time: ${endTime - startTime} milliseconds`);
        result.status(200).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Hotels',
            result: `${count} hotels have been deleted`,
            time: `${endTime - startTime} milliseconds`
        });
    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}

export async function deleteAllReviews(request, result) {
    try {
        //const {isSQLServer} = request.query;
        let count;
        //isSQLServer === 'true' ? count = await countAllReviewsSQLServer() : count = await countAllReviewsNoSQL();
        count = await countAllReviewsNoSQL();
        const startTime = performance.now();
        //isSQLServer === 'true' ? await deleteAllReviewsSQLServer() : await deleteAllReviewsNoSQL();
        await deleteAllReviewsNoSQL();
        const endTime = performance.now();

        console.log(`Time: ${endTime - startTime} milliseconds`);
        result.status(200).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Reviews',
            result: `${count} reviews have been deleted`,
            time: `${endTime - startTime} milliseconds`
        });
    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}

export async function updateAllHotels(request, result) {
    try {
        //const {isSQLServer} = request.query;
        let count;
        //isSQLServer === 'true' ? count = await countAllHotelsSQLServer() : count = await countAllHotelsNoSQL();
        count = await countAllHotelsNoSQL();
        const startTime = performance.now();
        //isSQLServer === 'true' ? await updateAllHotelsSQLServer() : await updateAllHotelsNoSQL();
        await updateAllHotelsNoSQL()
        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        result.status(200).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Hotels',
            result: `${count} hotels have been updated`,
            time: `${endTime - startTime} milliseconds`
        });
    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}

export async function updateAllReviews(request, result) {
    try {
        //const {isSQLServer} = request.query;
        let count;
        //isSQLServer === 'true' ? count = await countAllReviewsSQLServer() : count = await countAllReviewsNoSQL();
        count = await countAllReviewsNoSQL();
        const startTime = performance.now();
        //isSQLServer === 'true' ? await updateAllReviewsSQLServer() : await updateAllReviewsNoSQL();
        await updateAllReviewsNoSQL();
        const endTime = performance.now();
        console.log(`Time: ${endTime - startTime} milliseconds`);

        result.status(200).json({
            /*dbType: isSQLServer === 'true' ? 'SQLServer' : 'MongoDB',*/
            table: 'Reviews',
            result: `${count} reviews have been updated`,
            time: `${endTime - startTime} milliseconds`
        });
    } catch (e) {
        console.log(e);
        result.status(500).json({error: 'Something went wrong...'});
    }
}