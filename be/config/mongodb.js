import mongoose from "mongoose";

const connectdb = async () => {
    try {
        // Connect to MongoDB without deprecated options
        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
        console.log('DB connected');

        // Listening for connection events
        mongoose.connection.on('error', (err) => {
            console.error('DB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('DB disconnected');
        });

    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1); // Exit the process if there's a connection error
    }
};

export default connectdb;
