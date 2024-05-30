import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getFilters() {
    const filters = await prisma.filters.findMany()
    console.log(filters);
    return filters;
}

