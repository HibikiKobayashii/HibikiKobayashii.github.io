import React from "react";
import Header from "../app/components/Header";
import Gazo from "../app/components/gazo";

function Home() {
  return (
    <div style={{ backgroundColor: "#aliceblue", minHeight: "100vh" }}>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>API実習ポートフォリオ</h1>
        <p>This is a basic Next.js site with a TypeScript header.</p>

        {/* Gazoコンポーネントをここで使用 */}
        <section style={{ marginTop: "20px" }}>
          <h2>写真ギャラリー</h2>
          <Gazo
            src="https://drive.google.com/uc?export=view&id=1gNnYHNP88I9lwGkU61iZiYOKS1B8nDUD"
            alt=""
            caption=""
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
