import Image from "next/image";
import { IntegrationsDemo } from "@/components/landing/integrations-demo";

export function BentoBox() {
    const features = {
        'funnel': {
            title: 'Seguimiento Inteligente de Resolución y Progreso en tu Funnel Empresarial',
            description: 'Visualiza en tiempo real cuántas personas completan o abandonan cada etapa de tu proceso de venta gracias al reconocimiento facial y seguimiento anónimo del cliente.',
            image: '/landing/extraction.png',
            imageWidth: 700,
            imageHeight: 500
        },
        'sentiment': {
            title: 'Análisis Emocional en Tiempo Real',
            description: 'Detecta expresiones faciales y emociones durante la visualización de tus contenidos, diferenciando entre impacto positivo, indiferencia o rechazo',
            image: '/landing/sentiment-analysis.png',
            imageWidth: 500,
            imageHeight: 150
        },
        'encryption': {
            title: 'Encriptación y Protección de Datos',
            description: 'Cumplimos con los más altos estándares de privacidad: toda la información es anonimizada y procesada localmente.',
            image: '/landing/lock.png',
            imageWidth: 247,
            imageHeight: 247
        },
        'integration': {
            title: 'Integraciones Flexibles con los Principales CRMs',
            description: 'Solipsis se conecta con tus flujos de datos en Power BI, APIs propias o dashboards existentes para centralizar el análisis del comportamiento físico de tus clientes.',
            component: <IntegrationsDemo />

        },
        'reporting': {
            title: 'Reportes Personalizados de Rendimiento',
            description: 'Accede a dashboards con métricas clave por tienda, horario, pantalla y anuncio. Mide el ROI visual y ajusta campañas en tiempo real.',
        },
        'detection': {
            title: 'Estudios Visuales Personalizados con IA',
            description: `Transforma tus espacios físicos en fuentes inteligentes de datos. Con nuestra tecnología de Visual Transformers, lanza campañas de detección para responder preguntas clave como:
            
            ¿Quiénes visitan mi tienda usan ropa Lacoste? ¿Cuántos clientes llevan mochilas Nike? ¿Qué franjas demográficas interactúan más con cierto producto?`,
        },
        'ai': {
            title: 'Seguimiento de Interacciones Visuales',
            description: 'Recibe informes automáticos sobre las interacciones entre clientes y pantallas, identificando qué anuncios fueron vistos y por cuánto tiempo.',
            image: '/landing/summary.png',
            imageWidth: 490,
            imageHeight: 575
        }
    }


    return (

        <div>
            <div className="flex flex-col items-center mb-16" >
                <h1 className="text-3xl font-semibold text-center mb-4 sm:text-4xl md:text-5xl">Soluciones hechas para ti</h1>
                <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 w-3/4 md:w-1/2 mx-auto md:text-xl">
                    Equipa a tu empresa con funciones que convierten cada interacción en una oportunidad de mejora
                </p>
            </div>

            <div className="flex flex-col justify-center items-center md:w-full md:px-24">
                {/*Funnel & Resumen*/}
                <div className="flex border-2 flex-wrap md:flex-nowrap border-black/[.05] dark:border-white/[.06] rounded-lg">
                    <div className="w-full md:w-5/8">
                        <BoxElement title={features.funnel.title} description={features.funnel.description} image={features.funnel.image} imageWidth={features.funnel.imageWidth} imageHeight={features.funnel.imageHeight} />
                    </div>
                    <div className="w-full md:w-3/8 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                        <BoxElement title={features.ai.title} description={features.ai.description} image={features.ai.image} imageWidth={features.ai.imageWidth} imageHeight={features.ai.imageHeight} />
                    </div>
                </div>
                {/*Sentimemnt Analisis & Encriptacion */}
                <div className="flex border-2 flex-wrap md:flex-nowrap border-black/[.05] dark:border-white/[.06] rounded-lg">
                    <div className="w-full md:w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                        <BoxElement title={features.sentiment.title} description={features.sentiment.description} image={features.sentiment.image} imageWidth={features.sentiment.imageWidth} imageHeight={features.sentiment.imageHeight} />
                    </div>
                    <div className="w-full md:w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                        <BoxElement title={features.encryption.title} description={features.encryption.description} image={features.encryption.image} imageWidth={features.encryption.imageWidth} imageHeight={features.encryption.imageHeight} />
                    </div>

                </div>
                {/* Reportes, Deteccion, & Integracion */}
                <div className="flex border-2 flex-wrap md:flex-nowrap border-black/[.05]  dark:border-white/[.06] rounded-lg">
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <div className="flex flex-col gap-4 border-b-[1px] border-black/[.05] dark:border-white/[.06]">
                            <BoxElement title={features.reporting.title} description={features.reporting.description} />
                        </div>
                        <div>
                            <BoxElement title={features.detection.title} description={features.detection.description}/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 border-l-[1px] border-black/[.05] dark:border-white/[.06]">
                        <BoxElement title={features.integration.title} description={features.integration.description} component={features.integration.component} />

                    </div>

                </div>
            </div>
        </div>

    );
}


function BoxElement({ title, description, image, imageWidth = 700, imageHeight = 500, component }: { title: string, description: string, image?: string, imageWidth?: number, imageHeight?: number, component?: React.ReactNode }) {
    return (
        <div className="w-full p-12 flex flex-col items-center">
            <div className="flex flex-col items-start gap-4">
                <h1 className=" w-full md:w-3/4 text-2xl font-semibold text-[#1B1B1B] text-center md:text-left">{title}</h1>
                <p className="w-full md:w-3/4 text-md font-light text-[#515151] text-center md:text-left whitespace-pre-line">{description}</p>
            </div>
            {image ? <Image src={image} alt={title} width={imageWidth} height={imageHeight} className="mt-16" /> : null}

            {component ? component : null}
        </div>
    )
}



