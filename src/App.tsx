import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DropdownProvider } from "./providers/DropdownVisible.provider";

export default function App() {
  return (
    <DropdownProvider>
      <div className="relative">
        <Header />
        <Body />
        <Footer />
      </div>
    </DropdownProvider>
  );
}
