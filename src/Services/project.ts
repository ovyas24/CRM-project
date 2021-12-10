import Project from '../Models/project';

export default {
    async add(project: ProjectType) {
        await new Project(project).save()
    },
    async getAll(criteria: any, projection: any = {}, populate: Populate[] = []){
        await Project.find(criteria, projection).populate(populate)
    },
    async get(criteria: any, projection: any = {}, populate: Populate[] = []){
        await Project.findOne(criteria, projection).populate(populate)
    },
    async updateOne(criteria: any, dataToSet: any){
        await Project.updateOne(criteria, dataToSet)
    }, 
    async updateMany(criteria: any, dataToSet: any){
        await Project.updateMany(criteria, dataToSet)
    },
}