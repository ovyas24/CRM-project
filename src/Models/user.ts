import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    username: { type: String, required: true },
}, { timestamps: true });

export default model('User', userSchema);