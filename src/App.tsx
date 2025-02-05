import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BoardRefProvider } from "./providers/BoardRef.provider";
import { DropdownProvider } from "./providers/DropdownVisible.provider";
import { ScaleProvider } from "./providers/Scale.provider";
import { ShapesProvider } from "./providers/Shapes.provider";

export default function App() {
  return (
    <DropdownProvider>
      <ScaleProvider>
        <ShapesProvider>
          <BoardRefProvider>
            <div className="relative flex flex-col h-screen">
              <Header />
              <Body />
              <Footer />
            </div>
          </BoardRefProvider>
        </ShapesProvider>
      </ScaleProvider>
    </DropdownProvider>
  );
}
