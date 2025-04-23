import { NextResponse } from 'next/server';

export async function GET() {
  const menuItems = [
    { 
      id: 1, 
      name: "Pho Tai", 
      price: 12.99, 
      description: "Rare beef slices with rice noodles in savory beef broth.", 
      category: "Pho" 
    },
    { 
      id: 2, 
      name: "Pho Ga", 
      price: 11.99, 
      description: "Tender chicken breast with rice noodles in aromatic chicken broth.", 
      category: "Pho" 
    },
    { 
      id: 3, 
      name: "Banh Mi Thit", 
      price: 8.99, 
      description: "Vietnamese baguette sandwich with pork, pickled vegetables, and herbs.", 
      category: "Banh Mi" 
    },
    { 
      id: 4, 
      name: "Spring Rolls", 
      price: 6.49, 
      description: "Fresh shrimp and pork rolls with vermicelli, lettuce, and mint wrapped in rice paper. Served with peanut sauce.", 
      category: "Khai Vi" 
    },
    { 
      id: 5, 
      name: "Vermicelli Bowl", 
      price: 13.49, 
      description: "Grilled pork with vermicelli noodles, fresh herbs, and nuoc cham dipping sauce.", 
      category: "Bun" 
    },
    // You can add more items here!
  ];

  return NextResponse.json(menuItems);
}
