import * as React from "react";
import './searchBox.less'
interface searchBoxProps {
    text:string;
}
interface searchBoxstates {
  currentVal: string;
}

export class SearchBox extends React.Component<searchBoxProps, searchBoxstates> {
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
                <span  className="searchBox">{this.props.text}</span>
                <input type="text" 
                value={this.state.currentVal} onChange={this.onInputChange.bind(this)}/>
            </div>
        )
    }
}
