import {useState, useEffect} from "react"
import Error from "./Error";

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {
    
    // * Definicion de State
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        if ( Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        // ? Valida el formulario
        if ([nombre,propietario,email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }

        setError(false)

        const objPaciente = {
            nombre,
            propietario,
            email, 
            fecha, 
            sintomas,
        }

        // ? Edita registro
        if (paciente.id) {
            objPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
            
        // ? Nuevo registro
        } else {
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }

        // ? Se limpia el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-5"
                  onSubmit={handleSubmit}        
            >
                {/* Se verifica si hay campos vacios */}
                {error && <Error><p>Todos los campos son Obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">
                        Nombre Mascota
                    </label>

                    <input 
                    id="mascota"
                    type="text" 
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">
                        Nombre Propietario
                    </label>

                    <input 
                    id="propietario"
                    type="text" 
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
                        E-mail
                    </label>

                    <input 
                    id="email"
                    type="email" 
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
                        De Alta
                    </label>

                    <input 
                    id="alta"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
                        Síntomas
                    </label>

                    <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>
        </div>
    )
}

export default Formulario