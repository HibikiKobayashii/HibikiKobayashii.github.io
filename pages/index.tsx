import React from "react";
import Header from "../app/components/Header"; // エイリアスを使ってHeaderをインポート
import TextContent from "../app/components/TextContent"; // エイリアスを使ってTextContentをインポート
import SkillDescription from "../app/components/SkillDescription"; // エイリアスを使ってSkillDescriptionをインポート

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#08081a", // 背景色を #08081a に
        color: "#a0d8ef", // 文字色を #a0d8ef に
      }}
    >
      {/* CSSリセットを適用 */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>

      <Header /> {/* ヘッダーコンポーネント */}
      <main
        style={{
          paddingTop: "70px", // ヘッダー分のスペースを確保
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <TextContent /> {/* 文字と文章を表示するコンポーネント */}
        
        {/* 画像の表示 */}
        <div style={{ marginTop: "20px" }}>
          <img
            src="" //"https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/hibiki.jpg"
            alt="小林響"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #a0d8ef", // ボーダー色を文字色に合わせる
            }}
          />
        </div>

         

        {/* スキルセクション */}
       <section
  id="skills"
  style={{
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#03090d",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex", // 横並びにする
    justifyContent: "space-between", // 子要素を左右に配置
    alignItems: "center", // 子要素の高さを揃える
  }}
>
  {/* 左側の画像 */}
  <div
    style={{
      display: "flex", // 画像を横並びに
      flexDirection: "column", // 画像を縦方向に配置
      alignItems: "center", // 中央揃え
      gap: "10px", // 画像間の間隔
    }}
  >
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/react.jpg"
      alt="React"
      style={{
        width: "150px",
        height: "auto",
        borderRadius: "10px",
        border: "1px solid #7ebeab",
      }}
    />
    <img
      src="https://raw.githubusercontent.com/HibikiKobayashii/HibikiKobayashii.github.io/main/gazo/nextjs.jpg"
      alt="Next.js"
      style={{
        width: "150px",
        height: "auto",
        borderRadius: "10px",
        border: "1px solid #7ebeab",
      }}
    />
  </div>

  {/* 表のセクション */}
  <div style={{ flex: 1, marginLeft: "20px" }}>
    <h1
      style={{
        marginBottom: "20px",
        color: "#7ebeab",
        textAlign: "center",
      }}
    >
      スキル
    </h1>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              backgroundColor: "#000000",
              color: "#7ebeab",
            }}
          >
            技術
          </th>
          <th
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              backgroundColor: "#000000",
              color: "#7ebeab",
            }}
          >
            レベル
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            HTML
          </td>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            初心者
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            CSS
          </td>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            初心者
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            JavaScript
          </td>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            中級者
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            React(JS)
          </td>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            使い始めた
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            Next.js(JS)
          </td>
          <td
            style={{
              padding: "10px",
              border: "1px solid #7ebeab",
              color: "#7ebeab",
            }}
          >
            使い始めた
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
      </main>
    </div>
  );
};

export default App;
