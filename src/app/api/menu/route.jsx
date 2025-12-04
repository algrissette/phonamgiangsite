import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function GET() {
  try {
    // Get full path to CSV in public folder
    const filePath = path.join(process.cwd(), 'public', 'menu.csv');
    console.log(" my filepath", filePath)

    // Read CSV file as string
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse CSV
    const parsed = Papa.parse(fileContent, {
      header: true,      // Treat first row as header
      skipEmptyLines: true,
    });

    // Optional: convert price strings to numbers
    const menuItems = parsed.data.map(item => ({
      ...item,
      price: parseFloat(item.price.replace('$', '')) || 0,
    }));
    console.log("myyyyyy menu", menuItems)
    return NextResponse.json(menuItems);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load menu' }, { status: 500 });
  }
}
