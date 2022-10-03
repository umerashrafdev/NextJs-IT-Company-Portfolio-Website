import Layout from '../components/Layout'
import '../styles/globals.css'
import React from 'react';
import LoadingScreen from '../components/LoadingScreen';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <>
      {!loading ? (
       <LoadingScreen />
      ) : (
        
         <Layout><Component {...pageProps} /></Layout>
      )}
    </>)
}

export default MyApp
