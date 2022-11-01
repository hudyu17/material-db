import prisma from "../prisma"


const getMaterialByFilter = async (filter) => {
    // console.log(prisma)
    const materials = await prisma.material.findMany({
        where: {
            OR: [
                {
                    name: {search: filter.name}
                },
                {
                    location: {equals: filter.location}
                },
                {
                    type: {equals: filter.type}
                }      
            ]
    }
    });
    return materials;
}

const getAllMaterials = async () => {
    // console.log(prisma.material)
    const materials = await prisma.material.findMany({
        include: {
            manufacturer: true
        },
    })
    return materials;
}

export { getMaterialByFilter, getAllMaterials };