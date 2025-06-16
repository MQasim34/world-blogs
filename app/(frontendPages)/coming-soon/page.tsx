export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Site Under Construction</h1>
        <p className="text-xl opacity-90">
          We're working hard to launch our new website. Please check back soon!
        </p>
        <div className="pt-8 flex gap-4 justify-center">
          <a 
            href="/login" 
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Admin Login
          </a>
          <a 
            href="/wp-admin" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            WordPress Admin
          </a>
        </div>
      </div>
    </div>
  );
}