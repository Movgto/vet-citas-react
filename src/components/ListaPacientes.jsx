import Paciente from "./Paciente"

const ListaPacientes = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-3/5 flex flex-col gap-4">
      <h2 className="font-bold text-4xl text-center">Lista de pacientes</h2>
      <p className="text-center">
        Administra tus{' '}
        <span className="font-bold text-teal-600">Pacientes</span>
        {' '}y{' '}
        <span className="font-bold text-teal-600">Citas</span>
      </p>

      <div className="flex flex-col gap-4 p-6 md:h-screen md:overflow-y-scroll">
        {patients && patients.length ? (patients.map(patient => {
          return (<Paciente patient={patient} key={patient.id} setPatient={setPatient} deletePatient={deletePatient} />);
        })) :
          (
            <p className="font-bold text-center">Agrega pacientes para verlos <span className="text-teal-500">aquí</span></p>
          )
        }
      </div>
    </div>
  )
}

export default ListaPacientes
