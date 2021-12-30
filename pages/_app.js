import '../styles/global.css';
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Helmet from 'react-helmet';

export default function App({ Component, pageProps }) {
    return (
      <div className="page-background-1">
        <Component {...pageProps} />
        <Helmet bodyAttributes={{style: 'background-color : #FFC06A'}}/>
      </div>
  )
}
