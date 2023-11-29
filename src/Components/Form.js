import './Form.css';
const Form =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <input  className='inputt inp' name='city' type="text" placeholder='City' ></input>
            <input className='inputt inp' name='country' type="text" placeholder='Country' ></input>
            <button className='inp btnn'>Enter</button>
        </form>
    )
}
export default Form;
