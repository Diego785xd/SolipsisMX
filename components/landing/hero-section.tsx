'use client'
import Link from "next/link"
export function HeroSectionComponent() {
  return (
    <div className="bg-white">
      

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
        <span className="mr-2">🎁</span> Agenda una demo gratuita y mide la atención en tu punto de venta
        </div>
        <h1 className="text-5xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Cartelería Digital Inteligente con IA y Visión Computacional en Tiempo Real
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Detecta quién ve tus anuncios, cuánto tiempo los observa y qué emociones genera — todo sin contacto y en tiempo real
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link href="https://calendly.com/david-delulu/30min" className="bg-black text-white px-6 py-3 rounded-lg text-lg border-2 hover:bg-white hover:border-gray-200 hover:border-2 hover:text-black transition-colors duration-300">Agenda Una Demo</Link>
          {/*<Link href="/auth" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300">Comienza tu prueba gratuita</Link>*/}
        </div>
      </main>
    </div>
  )
}