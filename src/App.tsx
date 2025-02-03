import Body from "./components/Body";
import Header from "./components/Header";
import { DropdownProvider } from "./providers/DropdownVisible.provider";

export default function App() {
  return (
    <DropdownProvider>
      <Header />
      <Body />
    </DropdownProvider>
  );
}
