import React from "react";

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: props.duration ? props.duration : 5
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count && this.state.count === 0){
            clearInterval(this.timer);
            if(this.props.onTimesup){
                this.props.onTimesup();
            }
        }
    }

    formateTime(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h < 10 ? "0"+h+":" : h+":";
        var mDisplay = m < 10 ? "0"+m+":" : m+":";
        var sDisplay = s < 10 ? "0"+s : s;
        return hDisplay + mDisplay + sDisplay; 
    }
   

    render(){
        let {count} = this.state;
        return(
            <>
                {this.formateTime(count)}
            </>
            
        )
    }
}