import { Footer } from '../footer';
type Props = {children?: React.ReactNode}

export const PageLayout = ({ children }: Props) => (
  <div className="relative bg-primaryDark">
    {children}
    <Footer />
  </div>
);
