'use client';

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-xl py-5 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 lg:px-8">
          <a href="#home" className="text-3xl font-extrabold text-blue-700 tracking-tight">Kiểm Tin Thật</a>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Trang chủ</a>
            <a href="/check-news" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Kiểm tra tin giả</a>
            <a href="/reports" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Báo Cáo</a>
            <a href="/fact-checking-guide" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Kiến Thức</a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Về chúng tôi</a>
            <a href="/contribute" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Đóng góp / Ủng hộ</a>
          </div>
          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition duration-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </nav>
        <div id="mobile-menu" className="hidden md:hidden bg-white mt-3 py-3 shadow-lg rounded-xl mx-4">
          <a href="/" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-200 text-lg font-medium">Trang chủ</a>
          <a href="/check-news" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-200 text-lg font-medium">Kiểm tra tin giả</a>
          <a href="/reports" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-200 text-lg font-medium">Báo Cáo</a>
          <a href="/fact-checking-guide" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">Kiến Thức</a>
          <a href="/about-us" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-200 text-lg font-medium">Về chúng tôi</a>
          <a href="/contribute" className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition duration-200 text-lg font-medium">Đóng góp / Ủng hộ</a>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl shadow-2xl mb-12 transform transition-all duration-500 ease-in-out hover:scale-[1.01]">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-md">Phát hiện Tin giả, Bảo vệ sự thật.</h2>
          <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Kiểm Tin Thật giúp bạn kiểm tra độ tin cậy của tin tức và thông tin trên Internet một cách nhanh chóng và chính xác.
          </p>
          <div className="space-x-6 flex justify-center">
            <a href="/check-news" className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              Kiểm tra tin ngay
            </a>
            <a href="/reports" className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              Báo Cáo Tin Giả
            </a>
          </div>
        </section>

        <section className="py-16 bg-white rounded-3xl shadow-xl mb-12">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-10">Lợi ích của Kiểm Tin Thật</h3>
          <div className="grid md:grid-cols-3 gap-10 px-6 lg:px-12">
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/120x120/E0F2FE/3B82F6?text=Chính+xác" alt="Chính xác" className="mx-auto mb-6 rounded-full border-4 border-blue-200" />
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Chính xác</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Sử dụng công nghệ AI tiên tiến để phân tích và đánh giá độ tin cậy với độ chính xác cao.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/120x120/E0F2FE/3B82F6?text=Nhanh+chóng" alt="Nhanh chóng" className="mx-auto mb-6 rounded-full border-4 border-blue-200" />
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Nhanh chóng</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Nhận kết quả phân tích chỉ trong vài giây, giúp bạn tiết kiệm tối đa thời gian.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/120x120/E0F2FE/3B82F6?text=Minh+bạch" alt="Minh bạch" className="mx-auto mb-6 rounded-full border-4 border-blue-200" />
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Minh bạch</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Cung cấp lý do cụ thể cho mỗi điểm tin cậy, giúp bạn hiểu rõ cơ sở đánh giá.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white rounded-3xl shadow-xl mb-12">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-10">Quy trình hoạt động</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 px-6 lg:px-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/140x140/D1FAE5/059669?text=Bước+1" alt="Bước 1" className="mx-auto mb-6 rounded-full border-4 border-green-200" />
              <p className="font-bold text-xl text-gray-800 mb-2">1. Nhập tin tức</p>
              <p className="text-gray-600 text-lg">Dán link hoặc nội dung tin bạn muốn kiểm tra vào hệ thống.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/140x140/D1FAE5/059669?text=Bước+2" alt="Bước 2" className="mx-auto mb-6 rounded-full border-4 border-green-200" />
              <p className="font-bold text-xl text-gray-800 mb-2">2. Phân tích AI</p>
              <p className="text-gray-600 text-lg">Hệ thống AI tiên tiến sẽ phân tích độ tin cậy và các dấu hiệu.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <img src="https://placehold.co/140x140/D1FAE5/059669?text=Bước+3" alt="Bước 3" className="mx-auto mb-6 rounded-full border-4 border-green-200" />
              <p className="font-bold text-xl text-gray-800 mb-2">3. Nhận kết quả</p>
              <p className="text-gray-600 text-lg">Xem điểm tin cậy, lý do chi tiết và gợi ý hành động cụ thể.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10 mt-auto">
        <div className="container mx-auto text-center px-4">
          <p className="text-lg mb-4">&copy; 2025 Kiểm Tin Thật. Phát triển bởi Học sinh THCS Vĩnh Lộc B</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/anhkhoavnk/?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
