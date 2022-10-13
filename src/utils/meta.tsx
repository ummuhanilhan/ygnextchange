import React from "react";


export const Meta = (title:any='YükGetir Lojistik Platformu! Cepten Yönet') => (
    <React.Fragment>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta name="author" content="Mustafa Tok" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content=""></meta>
        <meta property="og:type" content="product"/>
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico" type="image/png"/>
        <meta data-hid="og:site_name" property="og:site_name" content="" />
        <meta data-hid="og:og:type" property="og:type" content="website" />
        <meta name="theme-color" content="ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="/favicon.ico" />
        <meta name="twitter:image" content="/favicon.ico"/>
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="" />
    </React.Fragment>
 )