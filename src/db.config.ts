import mongoose from 'mongoose';
const mongoURI:string = process.env.MONGOURI || 'mongodb://localhost:27017/crm';
const db = mongoose;
db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', function() {
    console.log('Connected to MongoDB');
});

const connectDB  = () => {
    db.connect(mongoURI);
}

export default connectDB;