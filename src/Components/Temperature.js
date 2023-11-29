import './Temperature.css';
import {Component} from 'react';
class Temperature extends Component{

    //in case right city 
    temper=()=>{
        return(
            <div className='tempDiv data'> 
                    <p> Region : {this.props.data.city},{this.props.data.countryFound}</p>
                    <p className='back temp'>Temperature : {this.props.data.temp}</p>
                    <p className='back'>Humidity : {this.props.data.humdity}</p>
                    <p className='back state'>Today is {this.props.data.description}</p>

            </div>
        )
    }

    //in case wrong city
    errorMessage=()=>{
        return(
            <div className='tempDiv noData'>
                {/* <p>{this.props.data.error}</p> */}
                <p>{this.props.data.empty}</p>
            </div>
        )
    }
//show data or error
    showData=()=>{
        if(this.props.data.countryFound){
            console.log(this.props.data)
          return this.temper()
        }else{
            
                return this.errorMessage()
                     
                    
            
           // return this.errorMessage()
        }
      }

    render(){
        return(
            <div>
                {this.showData()}
            </div>
            
            
        )
    }

}
export default Temperature;
/**Good morning,How could I prepare for the exam? There is certain source I could practice in it */
