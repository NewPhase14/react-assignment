import { useAtom } from 'jotai';
import { ThemeAtom } from '../../atoms/ThemeAtom.tsx';
import { useEffect, useState } from 'react';
import { PatientsAtom } from '../../atoms/PatientsAtom.tsx';
import { Link } from 'react-router-dom';
import { Patients } from '../../Api.ts';
import { apiClient } from '../../apiClient.ts';

function PatientsPage() {
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [patients, setPatients] = useAtom(PatientsAtom);
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Patient id</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, i) => (
            <tr
              key={i}
              className="hover"
              onClick={() => {
                const newArray = [...patients.filter((i) => i != p)];
                setPatients(newArray);
                apiClient.patients.patientsDelete({ id: `eq.${p.id}` });
              }}
            >
              <td>{p.name}</td>
              <td>{p.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join">
        <input
          type="text"
          className="input join-item"
          placeholder="Enter patient name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="btn join-item"
          onClick={() => {
            apiClient.patients.patientsCreate({ name: value }).then((r) => {
              setPatients(patients.concat(r.data));
            });
          }}
        >
          Admit patient
        </button>
        <button
          className="btn join-item"
          onClick={() => {
            apiClient.patients.patientsDelete({ id: `eq.${value}` });
          }}
        >
          Delete patient
        </button>
      </div>
      <br></br>
      <Link to={'/'} className="link-hover">
        Back to home
      </Link>
    </>
  );
}

export default PatientsPage;
