import prisma from "../prisma"

const getMaterialById = async (id) => {
    const material = await prisma.material.findUnique({
        where: {
            id: id
        }
    });
    return material;
}

const getAllMaterials = async () => {
    const materials = await prisma.material.findMany({
        include: {
            manufacturer: true
        }
    })
    return materials;
}

export { getMaterialById, getAllMaterials };