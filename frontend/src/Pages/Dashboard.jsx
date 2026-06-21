import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-10">
        <h1 className="text-4xl font-bold">
          Dashboard Page
        </h1>

        <p className="mt-4 text-gray-600">
          This is a placeholder Dashboard page for the Week 2 deliverables.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;