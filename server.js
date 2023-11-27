import express from 'express';
import {
  getAllHotels,
  getAllReviews,
  createMultipleHotelsAtOnce,
  createMultipleReviewsAtOnce,
  createMultipleHotelsConsecutive,
  createMultipleReviewsConsecutive,
  deleteAllHotels,
  deleteAllReviews,
  updateAllHotels,
  updateAllReviews
} from './testingFunctions.js';
import connectDB from './mongoConnection.js';
//import { poolPromise } from './sqlServerConnection.js';

const app = express();
app.use(express.json());
const port = 3000;

try {
  void connectDB();
}
catch (e) {
  console.log(e);
  process.exit(1);
}
//let db = null;

// Establish SQL Server connection
/*poolPromise.then(pool => {
  db = pool;
  console.log('Connected to SQL Server');
}).catch(err => {
  console.error('Error establishing database connection:', err);
  process.exit(1); // Terminate the process on connection error
});*/

// Define your Express routes
app.get("/hotels", getAllHotels);
app.get("/reviews", getAllReviews);

app.post("/hotels/createMultiple", createMultipleHotelsAtOnce);
app.post("/hotels/createConsecutive", createMultipleHotelsConsecutive);
app.post("/reviews/createMultiple", createMultipleReviewsAtOnce);
app.post("/reviews/createConsecutive", createMultipleReviewsConsecutive);

app.delete('/hotels', deleteAllHotels);
app.delete('/reviews', deleteAllReviews);

app.put('/hotels', updateAllHotels);
app.put('/reviews', updateAllReviews);

// Add other routes as required

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});