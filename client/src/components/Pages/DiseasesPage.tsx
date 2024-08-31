import { useAtom } from 'jotai';
import { ThemeAtom } from '../../atoms/ThemeAtom.tsx';
import { useEffect } from 'react';
import { DiseasesAtom } from '../../atoms/DiseasesAtom.tsx';
import { Link } from 'react-router-dom';

function PatientsPage() {
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [diseases, setDiseases] = useAtom(DiseasesAtom);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <h1 className="">Diseases Page</h1>

      <ul>{diseases?.map((dis) => <li>{dis.name}</li>)}</ul>
      <Link to={'/'} className="link-hover">Back to home</Link>
    </>
  );
}

export default PatientsPage;
