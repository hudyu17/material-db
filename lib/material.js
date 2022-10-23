import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getMaterialById = async (id) => {
    const material = await prisma.material.findUnique({
        where: {
            id: id
        }
    });
    return material;
}

const getAllMaterials = async () => {

}

export { getMaterialById, getAllMaterials };