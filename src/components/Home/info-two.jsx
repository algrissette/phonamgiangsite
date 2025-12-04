import MenuCard from "./menu-card";

const InfoTwo = () => {
  const featuredItems = [
    { number: 1, photo: "Images/Home/Popular/phoBo.jpg", dish: "Pho Bo" },
    { number: 2, photo: "Images/Home/Popular/banhMi.jpg", dish: "Banh Mi" },
    { number: 3, photo: "Images/Home/Popular/bunCha.jpg", dish: "Bun Cha" },
    { number: 4, photo: "Images/Home/Popular/goiCuon.jpg", dish: "Goi Cuon" },
    { number: 5, photo: "Images/Home/Popular/comTam.jpg", dish: "Com Tam" },
    { number: 6, photo: "Images/Home/Popular/chaoLong.jpg", dish: "Chao Long" },
    { number: 7, photo: "Images/Home/Popular/bunBoHue.jpg", dish: "Bun Bo Hue" },
    { number: 8, photo: "Images/Home/Popular/caKhoTo.jpg", dish: "Ca Kho To" },
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
