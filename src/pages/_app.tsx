// Importações necessárias
import { MenuProvider } from '../context/MenuContext'; // Ajuste o caminho conforme necessário
import type { AppProps } from 'next/app';

// Componente MyApp para envolver sua aplicação com provedores de contexto
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;