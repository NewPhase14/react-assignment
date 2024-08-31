import { useEffect } from 'react';
import Home from './Pages/Home.tsx';
import { DevTools } from 'jotai-devtools';
import Navigation from './Navigation.tsx';
import { useAtom } from 'jotai';
import { ThemeAtom } from '../atoms/ThemeAtom.tsx';
import { apiClient } from '../apiClient.ts';
import { PatientsAtom } from '../atoms/PatientsAtom.tsx';
import { DiagnosesAtom } from '../atoms/DiagnosesAtom.tsx';
import { DiseasesAtom } from '../atoms/DiseasesAtom.tsx';

const App = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);
  const [patients, setPatients] = useAtom(PatientsAtom);
  const [diagnoses, setDiagnoses] = useAtom(DiagnosesAtom);
  const [diseases, setDiseases] = useAtom(DiseasesAtom);

  useEffect(() => {
    const initialPatients = apiClient.patients.patientsList().then((r) => {
      setPatients(r.data);
    });
  });

  useEffect(() => {
    const initialDiagnoses = apiClient.diagnoses.diagnosesList().then((r) => {
      setDiagnoses(r.data);
    });
  });

  useEffect(() => {
    const initialDiseases = apiClient.diseases.diseasesList().then((r) => {
      setDiseases(r.data);
    });
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <DevTools />
      <Navigation />
      <Home />
    </>
  );
};
export default App;
