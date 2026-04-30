import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          abanro.
        </h1>

        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your Store in Instagram. Turn conversations into sales, effortlessly.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
            Get Started
          </button>

          <button className="border px-6 py-3 rounded-xl">
            Learn more
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Sales automation",
            desc: "Automate Instagram DM sales flow",
          },
          {
            title: "Product management",
            desc: "Manage products directly in chat",
          },
          {
            title: "Analytics insights",
            desc: "Track performance and boost sales",
          },
        ].map((f, i) => (
          <div key={i} className="p-6 border rounded-2xl">
            <h3 className="font-bold">{f.title}</h3>
            <p className="text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6 text-center">

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold">0% Drop off</h2>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold">100% Automation</h2>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold">1 Platform</h2>
        </div>

      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Plans & Pricing
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-2xl">
            <h3 className="font-bold text-xl">Start</h3>
            <p className="text-gray-500">$49/mo</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✔ Unlimited Instagram accounts</li>
              <li>✔ Basic analytics</li>
              <li>✔ Email support</li>
            </ul>
          </div>

          <div className="border p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/20">
            <h3 className="font-bold text-xl">Growth</h3>
            <p className="text-gray-500">$99/mo</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✔ Advanced analytics</li>
              <li>✔ API access</li>
              <li>✔ Priority support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">

        <p className="text-lg text-gray-600 dark:text-gray-300">
          “Abanro made Instagram sales seamless and efficient.”
        </p>

        <h4 className="mt-4 font-bold">Jordan Ellis</h4>
        <p className="text-sm text-gray-500">Head of Digital Commerce</p>

      </section>

      {/* CTA */}
      <section className="text-center py-20">

        <h2 className="text-3xl font-bold">
          Drive Instagram sales effortlessly
        </h2>

        <p className="text-gray-500 mt-2">
          Integrate your store. Simplify your sales.
        </p>

        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl">
          Get Started
        </button>

      </section>

      <Footer />
    </>
  );
}