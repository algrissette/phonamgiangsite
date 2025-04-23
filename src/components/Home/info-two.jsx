import MenuCard from "./menu-card";

const InfoTwo = () => {
  const featuredItems = [
    { number: 1, photo: "/pho.jpg", dish: "Pho Bo" },
    { number: 2, photo: "/banhmi.jpg", dish: "Banh Mi" },
    { number: 3, photo: "/buncha.jpg", dish: "Bun Cha" },
    { number: 4, photo: "/goicuon.jpg", dish: "Goi Cuon" },
    { number: 5, photo: "/comtam.jpg", dish: "Com Tam" },
    { number: 6, photo: "/chaolong.jpg", dish: "Chao Long" },
    { number: 7, photo: "/bunbohue.jpg", dish: "Bun Bo Hue" },
    { number: 8, photo: "/caKho.jpg", dish: "Ca Kho To" },
  ];

  return (
    <section className="w-full bg-cream py-12">
      {/* 12 column layout container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl font-serif text-black mb-8 text-center">
          Featured Items
        </h2>

        {/* Cards grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {featuredItems.map((item) => (
            <MenuCard
              key={item.number}
              number={item.number}
              photo={item.photo}
              dish={item.dish}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-block text-xl font-semibold text-black underline underline-offset-4 hover:text-amber-100 transition-all"
          >
            See Full Menu
          </a>
        </div>

      </div>
    </section>
  );
};

export default InfoTwo;
