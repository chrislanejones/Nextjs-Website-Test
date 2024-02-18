import "@styles/globals.css";
import Nav from "@componates/Nav";
import Provider from "@componates/Provider";

export const metadata = {
  title: "promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
        <Nav />
      </body>
    </html>
  );
};

export default RootLayout;
