import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    category: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    isPublic: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export default model('Project', ProjectSchema);