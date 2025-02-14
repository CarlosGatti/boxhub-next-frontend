import Image from "next/image";

const Home = () => {
    return (
      <div>
        {/* Header */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
          
          <div className="flex items-center space-x-4">
            <Image src="/image/brand/rh-blue.png" alt="BoxHub" width={50} height={50} />
            {/* <a href="#" className="text-2xl font-bold text-gray-900">BoxHub</a> */}
            {/* <a href="#" className="text-2xl font-bold text-gray-900">BoxHub</a> */}
            </div>
            <nav className="space-x-4">
              <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-300 text-white">
          <h1 className="text-4xl font-bold">Manage Your Items with Ease</h1>
          <p className="mt-4 text-lg">BoxHub helps you organize and track your items efficiently.</p>
          <div className="mt-6 space-x-4">
            <a href="#features" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Get Started</a>
            <a href="#demo" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500">Try Demo</a>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="py-16 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">QR Code Management</h3>
              <p className="mt-2 text-gray-600">Generate and scan QR codes for easy tracking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">Cloud Storage</h3>
              <p className="mt-2 text-gray-600">Access your data anytime from anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">Advanced Search</h3>
              <p className="mt-2 text-gray-600">Quickly find items using filters and categories.</p>
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-200 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold">About BoxHub</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              BoxHub is an intuitive inventory management system designed for individuals and businesses
              to organize and track their items efficiently.
            </p>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>© 2025 BoxHub - All Rights Reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Home;
      