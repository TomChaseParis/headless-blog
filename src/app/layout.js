import { Lato, Open_Sans } from 'next/font/google'
import '../styles/styles.sass'

const lato = Lato
({ subsets: ['latin'], 
   weight: ['400', '700', '900']  ,
   variables: '--font-lato'
})

const openSans = Open_Sans(
  { subsets: ['latin'],
  variables: '--font-open-sans'

})

export const metadata = {
  title: 'Headless Blog',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${openSans.variables} ${lato.variables}`}>{children}</body>
    </html>
  )
}

export default RootLayout
