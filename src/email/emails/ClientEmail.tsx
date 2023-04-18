import { Body } from '@react-email/body'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Img } from '@react-email/img'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        metro: {
          black: '#1b1a1a',
          grey: '#5d5d5d',
          grey2: '#808080',
          m: '#fe7e0b',
          mb: '#e67009',
          m1: '#ffa557',
          g: '#f5f5f5',
          g2: '#e6e6e6',
          h: '#354052',
          hh: '#293240',
          input: '#495057',
          border: '#ced4da',
        },
      },
    },
  },
}

type ClientEmailProps = {
  name?: string
  projectName?: string
  executiveName?: string
  executiveEmail?: string
  executivePhone?: string
}

export default function ClientEmail({
  name = 'Nombre Cliente',
  projectName = 'Nombre Proyecto',
  executiveName = 'Nombre Ejecutivo',
  executiveEmail = 'email@ejecutivo.cl',
  executivePhone = '+56988888888',
}: ClientEmailProps) {
  return (
    <Html lang='es'>
      <Preview>Pronto nos contactaremos con usted</Preview>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='mx-auto max-w-[600px] bg-white py-4 font-sans'>
          <Section className='mb-4 w-full text-center'>
            <Img
              src='https://metropolitana.cl/wp-content/uploads/2019/10/logo-metropolitana-grupo-inmobiliario.png'
              alt='Metropolitana Grupo Inmobiliario'
              width='300'
              height='auto'
              className='mx-auto'
            />
          </Section>

          <Section className='mb-6 w-full'>
            <Text className='mb-0 text-center text-2xl'>
              Estimad@ {name}, muchas gracias por cotizar con nosotros en el
              proyecto {projectName}.
            </Text>
          </Section>

          <Section className='mb-4 w-full text-center'>
            <Text className='m-0 text-lg'>
              <strong>Ejecutivo:</strong> {executiveName}
            </Text>

            <Text className='m-0 text-lg'>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${executiveEmail}`}>{executiveEmail}</Link>
            </Text>

            <Text className='m-0 text-lg'>
              <strong>Teléfono:</strong>{' '}
              <Link href={`tel:${executivePhone}`}>{executivePhone}</Link>
            </Text>
          </Section>

          <Section className='mb-8 w-full text-center'>
            <Text>
              Pronto nos contactaremos con usted, para darle respuesta a su
              solicitud.
            </Text>
          </Section>

          <Section className='w-full bg-metro-m p-4 text-center'>
            <Text className='mx-auto text-xs text-white'>
              Copyright © 2023. Metropolitana Grupo Inmobiliario.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
