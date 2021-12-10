import User from '../Models/user';

export default {
    async add(user: UserType) {
        return await new User(user).save();
    },
    async get(id: string) {
        return await User.findById(id);
    },
    async getByEmail(email: string) {
        return await User.findOne({ email });
    },
    async getMany(ids: string[]) {
        return await User.find({ _id: { $in: ids } });
    },
    async update(id: string, user: UserType) {
        return await User.findByIdAndUpdate(id, user);
    },
    async delete(id: string) {
        return await User.findByIdAndDelete(id);
    }
}
