import Navbar from "@/components/Home/navbar";
import MenuTable from "./menutable"; // adjust path if needed

async function fetchMenuItems() {
  const res = await fetch("http://localhost:3000/api/menu", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch menu items");
  }

  const data = await res.json();
  return data.data || data; // <-- smart fallback
}

export default async function MenuPage() {
  const menuItems = await fetchMenuItems();

  return (
    <div>
      <Navbar/>
      <MenuTable menuItems={menuItems} />
    </div>
  );
}
