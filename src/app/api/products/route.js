import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../prisma/prisma-sql-client';
const prisma = new PrismaClient();
export async function GET() {
    try {
        const carkart = await prisma.cARKART.findMany();
        console.log(carkart);
        return NextResponse.json(carkart);
    } catch (error) {
        console.error('Error fetching filters:', error);
        return NextResponse.json({ message: 'Error fetching filters' }, { status: 500 });
    }
}