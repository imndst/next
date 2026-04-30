export default function Footer() {
  return (
    <footer className="border-t mt-20">

      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-4 gap-6 text-sm">

        <div>
          <h3 className="font-bold">abanro</h3>
          <p className="text-gray-500 mt-2">
            Instagram sales automation platform
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Platform</h4>
          <p>Overview</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Solutions</h4>
          <p>E-commerce</p>
          <p>Agencies</p>
          <p>Brands</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t">
        © 2025 Abanro. All rights reserved.
      </div>

    </footer>
  );
}