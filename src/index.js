import { createRoot } from "react-dom/client";
import FilterContacts from "./FilterContacts";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<FilterContacts />);
