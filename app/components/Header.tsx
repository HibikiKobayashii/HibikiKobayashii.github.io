import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'; // お問い合わせアイコンをインポート
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link"; // Next.jsのリンクコンポーネントをインポート

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#08081a",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* My Portfolioをクリックでホームに飛ぶように変更 */}
      <h1 style={{ color: "#a0d8ef", fontSize: "24px" }}>
        <Link href="https://hibikikobayashii.github.io/" style={{ textDecoration: "none", color: "#a0d8ef" }}>
          My Portfolio
        </Link>
      </h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "20px",
          }}
        >
          {/* プロフィールリンク */}
          <li>
            <Link 
              href="https://hibikikobayashii.github.io/profile" // プロフィールリンク
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <AccountCircleIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>
          
          {/* お問い合わせリンク */}
          <li>
            <Link 
              href="https://hibikikobayashii.github.io/contact" // お問い合わせリンク
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <ConnectWithoutContactIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>
          
          {/* インスタグラムリンク */}
          <li>
            <Link 
              href="https://www.instagram.com/mrq_1p?igsh=enljbnM2d25wdnZ6" 
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <InstagramIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>

          {/* YouTubeリンク */}
          <li>
            <Link 
              href="https://youtube.com/@futuregame0920?si=X0NHIuS1oiX6TMSl" 
              style={{ color: "#a0d8ef", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <YouTubeIcon style={{ marginRight: "8px" }} />
            </Link>
          </li>
       
        </ul>
      </nav>
    </header>
  );
};

export default Header;
