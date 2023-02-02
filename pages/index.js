import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <main>
        <ThemeProvider>
          <Navbar />
          <h1 className="text-2xl">My Portfolio</h1>
        </ThemeProvider>
      </main>
    </>
  );
}
