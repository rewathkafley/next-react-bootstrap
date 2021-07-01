import '../styles/globals.css';
import BootstrapProvider from '@bootstrap-styled/provider';

function MyApp({ Component, pageProps }) {
  return (
    <BootstrapProvider>
      <Component {...pageProps} />
    </BootstrapProvider>
  );
}

export default MyApp;
