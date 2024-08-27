import { useEffect } from 'react';

export default function Docs({ Component, pageProps }) {
    useEffect(() => {
        document.body.className = 'sobold-docs';
    });
    return <Component {...pageProps} />;
}
