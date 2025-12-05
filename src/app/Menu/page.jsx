import fs from "fs";
import path from "path";
import Papa from "papaparse";
import Navbar from "@/components/Home/navbar";
import MenuTable from "./menutable"; // adjust the path if needed

// Read and parse CSV directly
async function getMenuItems() {
  const filePath = path.join(process.cwd(), "public", "menu.csv");
  const csv = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse(csv, {
    header: true,       // use first row as header
    skipEmptyLines: true,
  });

  // Convert price strings to numbers and handle missing values
  return parsed.data.map(item => ({
    ...item,
    price: item.price ? parseFloat(item.price.replace("$", "")) : 0,
  }));
}

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return (
    <div>
      <Navbar />
      <MenuTable menuItems={menuItems} />
    </div>
  );
}
