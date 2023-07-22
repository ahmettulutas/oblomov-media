import Link from 'next/link';
import './contactus-button.css';

export const ContactUsButton: React.FC = () => {
  return (
    <div className="btn">
      <Link className="side default-side" href={"/contact"}>İletişime</Link>
      <Link className="side hover-side" href={"/contact"}>Geçin</Link>
    </div>
  );
};
