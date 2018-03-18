import * as React from "react";
import './searchBox.less';
import {FormattedMessage} from 'react-intl';

interface searchBoxProps {
    // text:any;
}
interface searchBoxstates {
  currentVal: string;
}

export class SearchBox extends React.Component<{}, searchBoxstates> {
    constructor(props:any){
        super(props);
        this.state = {currentVal: ''}
    }
    onInputChange(event:any){
        console.log(event.target.value);
        this.setState({currentVal: event.target.value})
    }
    render(){
        return (
            <div>
                <span  className="searchBox"><FormattedMessage id='hello'/></span>
                <span className="searchBox"><FormattedMessage id='time'/></span>
                <input type="text" 
                value={this.state.currentVal} onChange={this.onInputChange.bind(this)}/>
            </div>
        )
    }
}
