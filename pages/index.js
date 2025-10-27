import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          ColorStack SFU
        </h1>
        <p className="text-xl text-gray-700">
          Building community, support, and opportunities for Black and Latinx
          Computer Science students at Simon Fraser University.
        </p>
      </section>
    </Layout>
  );
}