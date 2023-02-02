import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <main>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
        </ThemeProvider>
        <h1 className="text-2xl">My Portfolio</h1>
      </main>
    </>
  );
}
