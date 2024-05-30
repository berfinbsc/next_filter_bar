import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
    try {
        const filters = await prisma.filters.findMany();
        console.log(filters);
        return NextResponse.json(filters);
    } catch (error) {
        console.error('Error fetching filters:', error);
        return NextResponse.json({ message: 'Error fetching filters' }, { status: 500 });
    }
}
