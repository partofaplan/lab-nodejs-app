import '../styles/global.css';
import React from "react";
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
    return (
      <div className="page-background-1">
        <Component {...pageProps} />
      </div>
  )
}

if (typeof window === 'undefined') {
  global.window = {}
}