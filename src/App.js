import {Component} from 'react';
import Form from './Components/Form'
import Temperature from './Components/Temperature'
import './App.css';

const api_key = '884ed9e96c4d9e55590b94c8f722e853';
//https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
class App extends  Component {
  state = {
    city:'',
    country:'',
    temp:'',
    humdity:'',
    description:'',
    icon:'',
    cityFound:'',
    countryFound:'',
    error: '',
    empty:''

  }

  handleSubmit= async(e)=>{
    e.preventDefault();
    let city=e.target.elements.city.value;//link input value in Form.js
    let country = e.target.elements.country.value;
    let ity = city.split('').splice(1).join('');
    let ountry = country.split('').splice(1).join('');
    console.log(city[0],country,ity)
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
    const data = await api.json();
    console.log(data)
    
    if(city.length<1 || country.length<1 || data.message){
      this.nomustboth(city,country,data.message) ;
      //e.target.elements.city.value ='';
    //e.target.elements.country.value =''

    }
    else if(data.name){
      this.setState({
      city:city[0].toUpperCase()+ity,
      country:country[0].toUpperCase()+ountry,
      temp:data.main.temp + '°C',
      humdity:data.main.humidity,
      description:data.weather[0].description,
      icon:data.weather[0].icon,
      cityFound:data.name,
      countryFound:data.sys.country,
     
    })
    //empty input in form.js
    e.target.elements.city.value ='';
    e.target.elements.country.value ='';
    
    }
    else{
      this.setState({  
      city:'',
      country:'',
      temp:'',
      humdity:'',
      description:'',
      icon:'',
      cityFound:'',
      countryFound:'',
      error:data.message})
      e.target.elements.city.value ='';
      e.target.elements.country.value ='';
    }
    
    console.log(this.state)
    


  }
  nomustboth=(cit,countr,error)=>{
    if(cit.length<1 && countr.length<1 ){
      
        this.setState({
      city:'',
      country:'',
      temp:'',
      humdity:'',
      description:'',
      icon:'',
      cityFound:'',
      countryFound:'',
      empty: 'Enter City and Country'})
     
          
  
    }
    else if(countr.length<1 && cit.length > 0){
        this.setState({
          city:'',
          country:'',
          temp:'',
          humdity:'',
          description:'',
          icon:'',
          cityFound:'',
          countryFound:'',
          error:'',
          empty:'Enter Country'})
      }//city not found
    else if(countr.length>0 && cit.length >0 && error ){
        this.setState({
          city:'',
          country:'',
          temp:'',
          humdity:'',
          description:'',
          icon:'',
          cityFound:'',
          countryFound:'',
          empty:'city not founddd'})
      }
      else{
        this.setState({
          city:'',
          country:'',
          temp:'',
          humdity:'',
          description:'',
          icon:'',
          cityFound:'',
          countryFound:'',
          empty:'Enter City'})
      }
     


  };
 
  
  render(){
    return (
    <div className="App">
      <main>
          <Form handleSubmit={this.handleSubmit}/>
          <Temperature data = {this.state}/>
           {/* {this.state.empty} */}
      </main>
      
    </div>
  );
  }
  
}

export default App;
