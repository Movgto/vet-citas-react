import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'
import { useEffect, useState } from 'react'

function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    console.log(patients);
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const deletePatient = (patientId) => {
    setPatients(
      patients.filter(p => p.id != patientId)
    );
  }

  const editPatient = (patientId, patientEdited) => {
    const patientsArray = patients.map((p) => {
      if (p.id == patientId) {
        return {
          ...p,
          ...patientEdited
        }
      } else {
        return p;
      }
    });

    setPatients(patientsArray);
  }

  return (
    <div className="flex flex-wrap justify-center flex-col">
      <Header />

      <div className="flex flex-col mt-8 md:flex-row gap-5 md:gap-0">
        <Formulario addPatient={addPatient} patient={patient} editPatient={editPatient} />
        <ListaPacientes patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
