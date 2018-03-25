import * as React from 'react';
import ConsoleLogo from './topBar/component/consoleLogo/logo';
const logoUrl = require('../asset/images/logo.png');

interface AppPorps {
    log: string,
    url: string
}

export default class App extends React.Component<AppPorps,{}>{
    render(){
        return (    
            // <ConsoleLogo logo='./../asset/images/logo.png' url='http://www.huaweicloud.com/'/>
            ConsoleLogo(logoUrl, 'http://www.huaweicloud.com/')
        )
    }
}