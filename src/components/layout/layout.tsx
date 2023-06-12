import { Footer } from "./footer";
import { Navbar } from "./navbar";

type Props = {children: React.ReactNode}

export const Layout = ({ children }: Props) => (
  <div className="relative z-0 bg-primary">
    <Navbar />
    {children}
    <Footer />
  </div>
);
