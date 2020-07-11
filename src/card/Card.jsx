import React from 'react';
import DatePicker from "react-datepicker";
import './Card.scss'
import 'react-datepicker/dist/react-datepicker.css'
import Visa from '../images/visa.png'
import master from '../images/master.png'
import union from '../images/union.png'

class Card extends React.Component{
    
    constructor(){
        super()
        this.state={
            cards:"block",
            Date:new Date()
        }
    }
    handleChange(e){
        console.log("date picked"+e)
        this.setState({
            Date:e
        })

    }

    Carddetect(e){
        console.log("number entered"+e.target.value);
        let v=e.target.value;
        let x=document.getElementById("visa");
        let y=document.getElementById("master");
        let z=document.getElementById("union");
        if(v==="1234"){
            console.log("x.."+x)
           x.style.opacity="1";
        }
        else if( v==="5478"){
            y.style.opacity="1";
        }
        else if(v==="8524"){
            z.style.opacity="1";
        }
        else{
            x.style.opacity="0.2";
            y.style.opacity="0.2";
            z.style.opacity="0.2";
        }
        }
    
    render(){
        
        return(
            <div className="card">
                <div className="inputs">
                    <div className="bar"></div>
                    <div className="input-field">
                    
                    <input  type="text" placeholder="Enter Card Number" onChange={(e)=>this.Carddetect(e)}/>
                    </div>
                   
                    <div className="datepicker">
                        <label>
                            Valid Thru </label>
                            <select name="month" placeholder="MM" >
                                <option value="1">01</option>
                                 <option value="2">02</option>
                                 <option value="2">03</option>
                                 <option value="2">04</option>
                            </select>
                            <select name="year" placeholder="YY" >
                                <option value="2017">17</option>
                                 <option value="2018">18</option>
                                 <option value="2019">19</option>
                                 <option value="2020">20</option>
                            </select>
                             <input className="input"  type="text" placeholder="cvv"/>
                   </div>
                   
        
                </div>
                <div className="cards" style={{display:this.state.cards}}>
                  <img src={Visa} alt="visa" id="visa" />
                  <img src={master} alt="master" id="master" />
                  <img src={union} alt="union" id="union"/>
                </div>
            </div>)
            
    }
    
}

export default Card;