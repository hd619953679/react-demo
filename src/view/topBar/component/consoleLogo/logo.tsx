import * as React from 'react';
import * as Style from './logo.module.css';

export default (logo, url) => {
    const logoStyle = {
        background: `url(${logo}) no-repeat left center`
    }
    return (
        <a className={Style.consoleLogo} style={logoStyle} href={url}></a>
    )
}