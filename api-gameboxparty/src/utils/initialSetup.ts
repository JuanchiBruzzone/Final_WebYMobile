import RoleModel from '../models/roles';

export const createRoles = async (): Promise<void> => {
    try {
        const count = await RoleModel.estimatedDocumentCount()

        if (count > 0) return;

        await Promise.all([
            new RoleModel({ name: 'user' }).save(),
            new RoleModel({ name: 'admin' }).save()
        ]);
    } catch (error) {
        console.log(error);
    }
}