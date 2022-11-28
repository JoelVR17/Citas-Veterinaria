const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Joel</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">joel@gmail.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
                <span className="font-normal normal-case">03-11-2003</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </span>
            </p>
        </div>
  )
}

export default Paciente