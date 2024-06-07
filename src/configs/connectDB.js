import mongoose from "mongoose";

const ConnectDB = async() => {
    try {
        const DB_OPTIONS = {
            dbName: "e-com",
        };

        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
        console.log(`Connection Successful on ${process.env.DATABASE_URL}`);
    } catch (error) {
        console.log("Database Connection Failed...!!!", error);
    }
};

export default ConnectDB;