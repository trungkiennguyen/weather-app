import React, { Component } from 'react';
import $ from 'jquery';

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Ha Noi',
            city:'',
            status:'',
            statusimg:'',
            temp:'',
            wind:'',
            humidity:'',
            time:''

        };
        this.handleChange = this.handleChange.bind(this);
        this.getjson = this.getjson.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    getjson(){
        $.ajax({
            url: 'https://api.apixu.com/v1/current.json?key=8f226d9ba4bb4bb58ef85947171107&q=' + this.state.value,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({city: data.location.name});
                this.setState({status: data.current.condition.text});
                this.setState({temp: data.current.temp_c});
                this.setState({time: data.current.last_updated});
                this.setState({statusimg: data.current.condition.icon});
                this.setState({humidity: data.current.humidity});
                this.setState({wind: data.current.wind_kph});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        })
    }
    componentWillMount(){
        this.getjson();
    }
    render() {   
        return (
            <div className="main">
                <div className="choose-title">
                    <p>Choose City</p>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Ho Chi Minh">Hồ Chí Minh</option>
                        <option value="Da Nang">Đà Nẵng</option>
                        <option value="Thai Binh">Thái Bình</option>
                        <option value="Hai Phong">Hải Phòng</option>
                        <option value="Can Tho">Cần Thơ</option>
                    </select>
                    <input type="button" value="Check Now" onClick={this.getjson}/>
                </div>


                <div className="display">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name city:</td>
                                <td id="namecity">{this.state.city}</td>
                            </tr>
                            <tr>
                                <td>Update: {this.state.time}</td>
                            </tr>
                            <tr>
                                <td id="status">{this.state.status}</td>
                                <td id="status-img"><img src={this.state.statusimg} alt=""/></td>
                            </tr>
                            <tr>
                                <td>Temp:</td>
                                <td id="temp">{this.state.temp}°C</td>
                            </tr>
                            <tr>
                                <td>Wind:</td>
                                <td id="wind">{this.state.wind} Km/h</td>
                            </tr>
                            <tr>
                                <td>Humidity:</td>
                                <td id="">{this.state.humidity}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AppMain;