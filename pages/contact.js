import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}