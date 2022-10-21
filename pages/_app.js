import "../styles/globals.css";
import { TopNav } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-[1296px]">
      <TopNav />
      {/* App root */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
