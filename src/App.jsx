import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Actions from "./components/Actions";

function App() {
  return (
    <div
      style={{
        width: "300px",
        minHeight: "500px",
      }}
      className="flex h-full"
    >
      <BaseLayout>
        <Header />
        <Actions />
        <Footer />
      </BaseLayout>
    </div>
  );
}

export default App;
