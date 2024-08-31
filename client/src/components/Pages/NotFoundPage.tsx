import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { ThemeAtom } from '../../atoms/ThemeAtom.tsx';
import { useEffect } from 'react';

function NotFoundPage() {
  const [theme, setTheme] = useAtom(ThemeAtom);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      404 this page does not exist
      <br></br>
      <Link to="/" className="link-hover">
        Home from link
      </Link>
    </div>
  );
}

export default NotFoundPage;
