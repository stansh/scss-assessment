import React, {useState} from 'react'
import './MultiSelect.scss'
import  {Modal, ModalBody}  from 'reactstrap';

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = props => {



   const styles  = {
    modal: {
        position: 'relative',
        marginTop: '200px',
        fontFamily: 'Bree Serif, serif',
        overflow: 'auto',
        border: '10px solid #12E0B7',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        textAlign: 'center',
        background:'#fff'

    },

    button: {
        /* borderRradius: '50%',
         width: '5rem',
         height: '5rem',
         background: '#E04812',
         color: '#fff',
         fontSize: '2rem',
         fontFamily: 'Bree Serif, serif',
         border: '2px solid black',
         borderRadius: '50%' */

        marginBottom: '2rem',
        marginLeft: '1rem',
        borderRadius: '50%',
        width: '7rem',
        height: '7rem',
        background:'#12E0B7',
        color: 'darkslategrey',
        fontSize: '2rem',
        fontFamily: 'Bree Serif, serif',
        border: '2px solid darkslategrey '
    },

    buttonSelected: {
        marginBottom: '2rem',
        marginLeft: '1rem',
        borderRadius: '50%',
        width: '7rem',
        height: '7rem',
        background:'#0796E0',
        color: 'darkslategrey',
        fontSize: '2rem',
        fontFamily: 'Bree Serif, serif',
        border: '2px solid darkslategrey '
    } 
   
      
}

const [show, setShow] = useState(false);
//const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
//const [clicked, setClicked] = useState(false);
const [selected, setSelected] = useState(-1);
const [selectedOptions, setSelectedOptions] = useState([])
const[selBut, setSelBut] = useState (false)



const handleSelect = (i,event) => {
    
    
    if(selected === -1) setSelected(i);
    if(!selectedOptions.includes(i)){
        setSelectedOptions([...selectedOptions, i])  

    }
     
let selectedButton = document.getElementById(i)   
 selectedButton.setAttribute("style","background-color:red");
   
    //handleShow();
    
 
  
    console.log(selectedButton.style)
  
}





return (
  
    <div className={`MultiSelect`} >
        <h1>
            {props.data.questionText}
            
        </h1>
         
       
        {
             /* selected === -1 && */
           
             props.data.options.map((option, optionIndex) => {
                return  <button  className = "buttons" style ={styles.button}  id ={optionIndex}  onClick={()=>{handleSelect(optionIndex)}}>{option.text}</button>
                
            })
            

        } {/* {<button onClick={handleShow()}>Submit</button>} */}

        {

           /*  selected > -1 &&    */               
          <>          
           
          {/*   <Modal isOpen={show} toggle={handleShow} style={styles.modal} ><ModalBody>
                   
                                <div className={`feedback ${selectedOption.correct ? 'correct' : 'incorrect'}`}>  
                                <h1>
                                    {selectedOption.correct ?
                                        props.data.feedback.correct.header
                                    :
                                        props.data.feedback.incorrect.header
                                    }
                                </h1>
                                <p>
                                    {selectedOption.correct ?
                                        props.data.feedback.correct.body
                                    :
                                        props.data.feedback.incorrect.body
                                    }
                                </p>
                                <button style={styles.button} onClick={props.onComplete}>OK</button>
                   
                            </div>    
                            </ModalBody>         
                </Modal> */}
                        

          </>  

            
         }
         
           
    </div>
)

}

export default MultiSelect