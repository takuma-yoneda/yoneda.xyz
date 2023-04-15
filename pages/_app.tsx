import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-free/css/all.css';
/* import 'prismjs/themes/prism-tomorrow.css' */
import 'prism-themes/themes/prism-one-dark.css'
/* import 'prism-themes/themes/prism-vsc-dark-plus.css' */

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
