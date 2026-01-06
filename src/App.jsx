import { useState } from "react";
import ThankYouPage from "./components/ThankYouPage";
import ExampleSelector from "./components/ExampleSelector";

function App() {
  const [selectedExample, setSelectedExample] = useState("shoes");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ExampleSelector
          selected={selectedExample}
          onSelect={setSelectedExample}
        />

        <ThankYouPage productType={selectedExample} />
      </div>
    </div>
  );
}

export default App;