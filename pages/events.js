import Layout from "../components/Layout";

export default function Events() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Hackathon Prep Workshop</h3>
            <p className="text-gray-600">September 22, 2025</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Networking Night</h3>
            <p className="text-gray-600">October 10, 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}