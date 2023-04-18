import { Body } from '@react-email/body'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

type MetroEmailProps = {
  formName?: string
  email?: string
  name?: string
  phone?: string
  rut?: string
  projectName?: string
  modelName?: string
  sourceCurrent?: string
  mediumCurrent?: string
  sourceFirst?: string
  mediumFirst?: string
  comment?: string
  mailTo?: string
}

export default function MetroEmail({
  formName = 'Nombre Formulario',
  email = 'email@dominio.cl',
  name = 'Nombre Cliente',
  phone = '+56988888888',
  rut = '11111111-1',
  projectName = 'Nombre Proyecto',
  modelName = 'Nombre Modelo',
  sourceCurrent = 'source current',
  mediumCurrent = 'medium current',
  sourceFirst = 'source first',
  mediumFirst = 'medium first',
  comment = 'Mensaje Test',
  mailTo = 'email@ejecutivo.cl',
}: MetroEmailProps) {
  const previewText = formName
  return (
    <Html lang='es'>
      <Preview>{previewText}</Preview>
      <Head />
      <Tailwind>
        <Body className=' bg-white py-4 font-sans'>
          <Section className='mb-4 w-full'>
            <Text className='m-0'>
              <strong>De:</strong> {formName} {`<${email}>`}
            </Text>

            <Text className='m-0'>
              <strong>Asunto:</strong> {previewText}
            </Text>
          </Section>

          <Section className='mb-4 w-full'>
            <Text className='m-0'>
              <strong>Nombre y Apellido:</strong> {name}
            </Text>

            <Text className='m-0'>
              <strong>E-mail:</strong> {email}
            </Text>

            <Text className='m-0'>
              <strong>Teléfono:</strong> {phone}
            </Text>

            <Text className='m-0'>
              <strong>Rut:</strong> {rut}
            </Text>

            <Text className='m-0'>
              <strong>Proyecto:</strong> {projectName}
            </Text>

            {modelName && (
              <Text className='m-0'>
                <strong>Planta:</strong> {modelName}
              </Text>
            )}
          </Section>

          <Section className='mb-4 w-full'>
            <Text className='m-0'>
              <strong>Última Fuente:</strong> {sourceCurrent}
            </Text>

            <Text className='m-0'>
              <strong>Último Medio:</strong> {mediumCurrent}
            </Text>

            <Text className='m-0'>
              <strong>Primera Fuente:</strong> {sourceFirst}
            </Text>

            <Text className='m-0'>
              <strong>Primer Medio:</strong> {mediumFirst}
            </Text>
          </Section>

          <Section className='mb-4 w-full'>
            <Text className='m-0'>
              <strong>Cuerpo del mensaje:</strong>
            </Text>
            <Text className='m-0'>{comment}</Text>
          </Section>

          <Section className='mb-4 w-full'>
            <Text className='m-0'>
              <strong>Enviado a:</strong> {mailTo}
            </Text>
          </Section>

          <Section className='w-full'>
            <Text className='m-0 italic'>
              Este mensaje se ha enviado desde un formulario de contacto en
              Metropolitana Grupo Inmobiliario
            </Text>
            <Text className='m-0'>(https://metropolitana.cl)</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
