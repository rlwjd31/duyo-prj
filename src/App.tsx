import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DropdownProvider } from "./providers/DropdownVisible.provider";
import { ScaleProvider } from "./providers/Scale.provider";

export default function App() {
  return (
    <DropdownProvider>
      <ScaleProvider>
        <div className="relative">
          <Header />
          <Body />
          <Footer />
        </div>
      </ScaleProvider>
    </DropdownProvider>
  );
}
