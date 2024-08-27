import BookCard from "@/app/(mainLayout)/_components/BookCard/BookCard";

const FilterItem = () => {
  const items = [
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg",
      title: "The Last Sister (Columbia River Book 1)",
      author: "Jessica Simpson",
      price: "14.20",
      format: "Hardcover",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title:
        "Think Like a Monk: Train Your Mind for Peace and Purpose Everyday",
      author: "J.D. Robb",
      price: "14.20",
      format: "Hardcover",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/18-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
    {
      image:
        "https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-120x183.jpg",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "1.30",
      originalPrice: "1.75",
      format: "Kindle",
    },
  ];
  return (
    <div className="col-span-9 grid grid-cols-4">
      {items.map((item, index) => (
        <BookCard
          key={index}
          image={item.image}
          title={item.title}
          author={item.author}
          price={item.price}
          originalPrice={item.originalPrice}
          format={item.format}
        ></BookCard>
      ))}
    </div>
  );
};

export default FilterItem;
