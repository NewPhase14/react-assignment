import { useAtom } from 'jotai';
import { ThemeAtom } from '../../atoms/ThemeAtom.tsx';
import { useEffect } from 'react';
import { DiagnosesAtom } from '../../atoms/DiagnosesAtom.tsx';
import { Link } from 'react-router-dom';

function PatientsPage() {
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [diagnoses, setDiagnoses] = useAtom(DiagnosesAtom);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <h1 className="">Diagnoses Page</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <tr>
            <th>Diagnosed patient id</th>
            <th>Disease id</th>
          </tr>
        </table>
      </div>
      <Link to={'/'} className="link-hover">
        Back to home
      </Link>
    </>
  );
}

export default PatientsPage;
