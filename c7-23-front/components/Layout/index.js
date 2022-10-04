import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div data-theme="corporate">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
