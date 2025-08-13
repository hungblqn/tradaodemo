"use client"

export default function HomePage() {
  const categories = [
    { id: 1, name: "Ấm trà", description: "Nhiều loại ấm trà đẹp, từ gốm sứ đến gang.", image: "/images/categories/amtra.jpg" },
    { id: 2, name: "Chén trà", description: "Chén trà nhỏ gọn, tinh tế cho buổi trà đạo.", image: "/images/categories/chentra.jpg" },
    { id: 3, name: "Cốc trà", description: "Cốc uống trà hiện đại và truyền thống.", image: "/images/categories/coctra.jpg" },
    { id: 4, name: "Khay trà", description: "Khay trà gỗ, tre và gốm sứ cao cấp.", image: "/images/categories/khaytra.jpg" },
    { id: 5, name: "Hũ đựng trà", description: "Bảo quản trà khô thơm ngon lâu dài.", image: "/images/categories/hudungtra.jpg" },
    { id: 6, name: "Trang trí bàn trà", description: "Phụ kiện trang trí tạo không gian trà đạo.", image: "/images/categories/trangtribantra.jpg" },
    { id: 7, name: "Dụng cụ pha trà", description: "Dụng cụ hỗ trợ pha trà chuẩn vị.", image: "/images/categories/dungcuphatra.jpg" },
    { id: 8, name: "Phụ kiện", description: "Các phụ kiện đi kèm cho buổi trà đạo.", image: "/images/categories/phukientradao.jpg" },
    { id: 9, name: "Thuyền trà", description: "Thuyền trà tiện lợi và sang trọng.", image: "/images/categories/thuyentra.jpg" },
  ];

  const featuredProducts = [
    { id: 1, name: "Cốc trà", price: "1.200.000₫", image: "/images/products/coctra1.jpg" },
    { id: 2, name: "Chén trà 1", price: "850.000₫", image: "/images/products/chentra1.jpg" },
    { id: 3, name: "Chén trà sắt", price: "960.000₫", image: "/images/products/chentra2.jpg" },
    { id: 4, name: "Bộ ấm chén trà", price: "1.500.000₫", image: "/images/products/boamchentra1.jpg"},
  ];

  const scrollToFeatured = () => {
    const section = document.getElementById("featured-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-orange-100">
      <main className="max-w-7xl mx-auto lg:px-32 px-8 py-12">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-serif tracking-wide text-gray-800">Danh mục Trà Đạo</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Khám phá các loại sản phẩm phục vụ buổi trà đạo của bạn.
          </p>
        </header>

        {/* Button */}
        <div className="flex justify-center mb-12">
          <button 
          className="bg-orange-900 text-orange-100 px-6 py-2 rounded-full font-medium hover:bg-orange-800 transition"
          onClick={scrollToFeatured} >
            Sản phẩm nổi bật
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-yellow-50 shadow hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 lg:h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <section id="featured-products">
          <h2 className="text-3xl font-serif tracking-wide text-gray-800 text-center mb-8">
            Sản phẩm nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="bg-yellow-50 shadow hover:shadow-lg transition rounded-xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <p className="text-orange-700 font-semibold mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-12">
          <button className="bg-orange-900 text-orange-100 px-6 py-2 rounded-full font-medium hover:bg-orange-800 transition">
            Xem tất cả sản phẩm
          </button>
        </div>   
      </main>
    </div>
  );
}
