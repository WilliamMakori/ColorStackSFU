import Layout from "../components/Layout";

export default function GetInvolved() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="text-gray-700 mb-4">
          Interested in joining ColorStack SFU? Whether you want to volunteer,
          become a mentor, or participate in events, there’s a place for you.
        </p>
        <a
          href="https://forms.gle/your-google-form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
        >
          Join Us
        </a>
      </div>
    </Layout>
  );
}