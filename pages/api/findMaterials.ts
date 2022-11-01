import { prisma } from "../../lib/prisma"

export default async function getMaterialByFilter(filter) {
    console.log(filter)
    const materials = await prisma.material.findMany({
        where: {
            OR: [
                {
                    name: {search: filter.name},
                },
                {
                    location: {equals: filter.location},
                },
                {type: {
                    equals: filter.type
                }}
                        
        ]
    }
    });
    return materials;
}
