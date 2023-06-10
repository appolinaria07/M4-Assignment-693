import mongoose from "mongoose";

// SETTING UP CONNECTION TO MONGODB
// process.env.DB returns a promise so we can use .then for a callback that we want to perform when
// the connection is successful and add an error message
// mongoose
//     .connect(process.env.DB)
//     .then(() => {console.log('Connected to the database...')})
//     .catch((err) => console.log(err))

// REFACTOR OUR PREVIOUS CODE TO MAKE IT MORE EFFICIENT
// Create a function that returns a connection object; we can also connect to multiple db using this
// code if need to
// Because we created a function, we need to export it which we didn't need to do before

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB