import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../prisma/prisma-sql-client';
const prisma = new PrismaClient();


/*
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
 
*/



export async function GET(request) {
    try {
        const filters = request.body; // İsteğin gövdesinden filtreleri al
        console.log(filters);

        if (!filters || Object.keys(filters).length === 0) {
            //filtre boş ise butun urunlerı getır
            const allProducts = await prisma.cARKART.findMany();
            console.log(allProducts);
            return NextResponse.json(allProducts);
          }

        const filterResults = await Promise.all(filters.map(async (f) => {
            const { category, filter } = f;

            // Filtreye göre ürünleri getir
            const products = await prisma.cARKART.findMany({
                where: {
                    cargrade:category,
                    carcategory:filter
                },
            });

            return products;
        }));

        // Tüm filtre sonuçlarını birleştir
        const mergedResults = filterResults.reduce((acc, curr) => acc.concat(curr), []);

        console.log(mergedResults);
        return NextResponse.json(mergedResults);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
    }
}




