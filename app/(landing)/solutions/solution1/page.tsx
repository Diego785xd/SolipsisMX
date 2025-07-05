export default function Solution1() {
    return (
        <div className="container py-8 mx-auto text-left">
        <div className="container mx-auto px-4 py-4 text-left">
          <div className="bg-blue-200 p-2 w-fit rounded">
            <p className="text-blue-800 text-[10px] font-bold">TIPO DE SOLUCIÓN</p>
          </div>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mt-4">
            Solución 1
          </h1>
        </div>
        <div className="px-4">
          <video 
            src="/videos/prueba.mp4" 
            autoPlay
            muted
            loop 
            className="w-screen max-w-full max-h-96 rounded-lg shadow-lg object-cover"
          />
            <p className="mt-4 text-left text-2xl text-gray-700">
                Descripción
            </p>
        </div>
      </div>
    )
}