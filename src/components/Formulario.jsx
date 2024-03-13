import { useState, useEffect } from 'react'

const Formulario = ({ addPatient, patient, editPatient }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [synthoms, setSynthoms] = useState('');

  const [error, setError] = useState(false);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log("Patient it's being edited");

    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setDate(patient.date);
      setSynthoms(patient.synthoms);

      setEdit(true);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle submit

    if (edit) {
      const patientEdited = {
        petName,
        ownerName,
        email,
        date,
        synthoms,        
      }
      editPatient(patient.id, patientEdited);
      clearFields();
      setEdit(false);
      return;
    }

    const data = {
      petName,
      ownerName,
      email,
      date,
      synthoms,
      id: generateId()
    }

    let errorFound = false;

    for(const [key, value ] of Object.entries(data)) {
      if (value == '') {
        setError(true);
        errorFound = true;
      }
    }

    if (errorFound) return;

    if (error) setError(false);
    addPatient(data);
    clearFields();

    console.log("Enviar formulario");
    console.log(data);
  };

  const clearFields = () => {
    setPetName('');
    setOwnerName('');
    setEmail('');
    setDate('');
    setSynthoms('');
  }

  return (
    <div className="md:w-2/5 flex flex-col gap-4">
      <h2 className="font-bold text-3xl">Seguimiento de pacientes</h2>
      <p>
        <span className="font-bold text-teal-600">Añade</span>
        {" "}pacientes y
        <span className="font-bold text-teal-600">{" "}administralos</span>
      </p>
      <form
        className="bg-white rounded-lg py-10 px-5 shadow-md flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        {error ?
          (<div className='font-bold text-center text-red-800'>
            <span>Todos los campos son obligatorios.</span>
          </div>) : null
        }
        <div className="flex flex-col gap-1 justify-items-center">
          <label htmlFor="mascota" className="font-bold text-xl">Nombre de la mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="w-full border-2 border-gray-500 p-1 rounded-md placeholder-slate-500 placeholder-opacity-60 font-bold"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 justify-items-center">
          <label htmlFor="propietario" className="font-bold text-xl">Nombre de propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="w-full border-2 border-gray-500 p-1 rounded-md placeholder-slate-500 placeholder-opacity-60 font-bold"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 justify-items-center">
          <label htmlFor="email" className="font-bold text-xl">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="w-full border-2 border-gray-500 p-1 rounded-md placeholder-slate-500 placeholder-opacity-60 font-bold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 justify-items-center">
          <label htmlFor="alta" className="font-bold text-xl">Alta</label>
          <input
            id="alta"
            type="date"
            className="w-full border-2 border-gray-500 p-1 rounded-md placeholder-slate-500 placeholder-opacity-60 font-bold"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 justify-items-center">
          <label htmlFor="alta" className="font-bold text-xl">Síntomas</label>
          <textarea
            placeholder="Síntomas"
            className="w-full border-2 border-gray-500 p-1 rounded-md placeholder-slate-500 placeholder-opacity-60 font-bold"
            value={synthoms}
            onChange={(e) => setSynthoms(e.target.value)}
          />
        </div>

        {edit ?
        (<input
          type="submit"
          value="Guardar"
          className="w-full rounded-sm text-white
          bg-sky-500 hover:bg-sky-300 cursor-pointer
          transition-colors py-2 font-bold"
        />) : 
        (<input
          type="submit"
          value="Enviar"
          className="w-full rounded-sm text-white
          bg-teal-700 hover:bg-teal-500 cursor-pointer
          transition-colors py-2 font-bold"
        />)}
      </form>
    </div>
  )
}

export default Formulario
