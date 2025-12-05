import Navbar from "@/components/Home/navbar";
import MenuTable from "./menutable";

async function fetchMenuItems() {
  // Use absolute URL for server-side fetch
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${baseUrl}/api/menu`, {
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch menu items:', res.status);
      throw new Error("Failed to fetch menu items");
    }

    const data = await res.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    // Return empty array as fallback
    return [];
  }
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