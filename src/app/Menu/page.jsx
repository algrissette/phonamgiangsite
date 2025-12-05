import Navbar from "@/components/Home/navbar";
import MenuTable from "./menutable";

async function fetchMenuItems() {
  // This works both on localhost AND Vercel
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/menu`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu items");
  }

  return res.json();
}

export default async function MenuPage() {
  const menuItems = await fetchMenuItems();

  return (
    <div>
      <Navbar />
      <MenuTable menuItems={menuItems} />
    </div>
  );
}
