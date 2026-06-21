import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Programs
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <Card
            title="Artificial Intelligence"
            description="Learn AI concepts and modern development workflows."
            image="https://picsum.photos/400/250?random=1"
            action="Learn More"
          />

          <Card
            title="Full Stack Development"
            description="Build complete web applications from frontend to backend."
            image="https://picsum.photos/400/250?random=2"
            action="Explore"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;