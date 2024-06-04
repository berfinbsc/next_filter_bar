import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../prisma/prisma-sql-client';
const prisma = new PrismaClient();



export async function GET() {
    try {
        const products = await prisma.sTKKART.findMany();
        console.log(products);
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching filters:', error);
        return NextResponse.json({ message: 'Error fetching filters' }, { status: 500 });
    }
}
 




export async function POST(request) {
    try {
      const { filters } = await request.json(); // İsteğin gövdesinden filtreleri al
      console.log(filters);
  
      if (!filters || filters.length === 0) {
        // Filtre boş ise bütün ürünleri getir
        const allProducts = await prisma.sTKKART.findMany();
        console.log(allProducts);
        return NextResponse.json(allProducts);
      }
  
      // Her kategori-filtre çiftini bağımsız koşul olarak oluştur
      const filteredProducts = await prisma.sTKKART.findMany({
        where: {
          OR: filters.flatMap((f) =>
            f.filter.map((filter) => ({
              CARGRADE: f.category,
              CARCATEGORY: filter
            }))
          )
        },
      });
      console.log(filteredProducts);
      return NextResponse.json(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ message: 'Error fetching products' }, { status: 500 });
    }
  }


