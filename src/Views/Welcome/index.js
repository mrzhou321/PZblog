/**
 * Created by PaulChou on 2018/11/22.
 */
import React from 'react'
import './index.css'
import { Link } from "react-router-dom";

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animateText: '',
            animateCompleted: false
        }
        this.animateTextLength = 0
    }

    componentDidMount() {
        this.timerID = setTimeout(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        console.log(111)
        this.animateTextLength++
        const strArr = '千里之行，始于足下'
        this.setState({
            animateText: strArr.substring(0, this.animateTextLength)
        })
        if (this.animateTextLength <= strArr.length) {
            this.timerID = setTimeout(
                () => this.tick(),
                500
            );
        } else {
            this.setState({
                animateCompleted: true
            })
        }

    }

    render() {
        let btn = null
        if (this.state.animateCompleted) {
            btn = <Link className="home-btn" to="/home">进入首页</Link>
        }
        return (
            <div className="welcome-container">
                <div className="welcome-content">
                    {this.state.animateText}
                    <br/>
                    {btn}
                </div>
            </div>
        )
    }
}

export default Welcome
