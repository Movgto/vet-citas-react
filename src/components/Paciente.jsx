import { useEffect } from "react"

const Paciente = ({ patient, setPatient, deletePatient }) => {  
  return (
    <div className="
    bg-white font-bold text-left
    flex flex-col gap-2 p-5 shadow-md
    rounded-md">
      <p>
        Nombre de la mascota: <span className="font-normal">{patient.petName}</span>
      </p>
      <p>
        Nombre del propietario: <span className="font-normal">{patient.ownerName}</span>
      </p>
      <p>
        Correo electrónico: <span className="font-normal">{patient.email}</span>
      </p>
      <p>
        Alta: <span className="font-normal">{patient.date}</span>
      </p>
      <p>
        Síntomas:{' '}
        <span className="font-normal">
          {patient.synthoms}
        </span>
      </p>
      <div className="flex justify-between">
        <button
          className="py-2 px-6 bg-teal-500 hover:bg-teal-300
          cursor-pointer rounded-md text-white font-bold
          transition-colors"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className="py-2 px-6 bg-red-500 hover:bg-red-300
          cursor-pointer rounded-md text-white font-bold
          transition-colors"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
