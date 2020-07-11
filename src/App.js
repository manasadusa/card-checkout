import React from 'react';
import Card from './card/Card'
import "./App.css";
import Title from './Title'



const App = () =>{
return(
    <div className="main-layout">
        <div className="payment-page">
        <Title title="checkout page"/>
        
    
    
    <div className="price-details">
    <Title title="Price details" />
    <div className="items">
    <p>Price 2 items </p>
    <p>Deliver charges </p>
    <p>Amount Payable </p>
    </div>
    <div className="prices">
    <p>1519</p>
    <p>0 </p>
    <p>1519 </p>  
    </div>
    

    </div>
    <Title title="Payment details" />
    <div className="card-div">
        <div className="pay-items">
        <input type="radio"/><label>UPI Payment</label>
        </div>
   <div  className="pay-items"><input type="radio"/> <label>
                        Credit/Debit/ATM card 
                    </label></div>
    
     <Card/>
     </div>
 <button className="button"> Continue to place order</button>
     </div>
     <div className="about" >
    <p>Indian Crafts</p>
     </div>
     </div>
       
    
)

}
export default App;