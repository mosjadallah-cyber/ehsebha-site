import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-white overflow-hidden">
            <Navbar />
            <main className="flex flex-1 items-center">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}