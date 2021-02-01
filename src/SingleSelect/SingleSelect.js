import React, {useState, useEffect} from 'react'
import './SingleSelect.scss'
import  {Modal, ModalBody}  from 'reactstrap';


const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */


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
            borderRradius: '50%',
             width: '5rem',
             height: '5rem',
             background: '#E04812',
             color: '#fff',
             fontSize: '2rem',
             fontFamily: 'Bree Serif, serif',
             border: '2px solid black',
             borderRadius: '50%'
        }
        
            
          
    }
  
    const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [selected, setSelected] = useState(-1);

    const handleSelect = (i) => {
        
        if(selected === -1) setSelected(i);
        handleShow();
    }

    const selectedOption = props.data.options[selected]
    
    return (
      
        <div className={`SingleSelect`} >
            <h1>
                {props.data.questionText}
                
            </h1>
             
           
            {
                 selected === -1 &&
               
                 props.data.options.map((option, optionIndex) => {
                    return <button  onClick={()=>{handleSelect(optionIndex)}}>{option.text}</button>
                })
 
            } 

            {

                selected > -1 &&                  
              <>          
               
               <Modal isOpen={show} toggle={handleShow} style={styles.modal} ><ModalBody>
                       
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
                    </Modal>
                           

              </>  
  
                
             }
             
               
        </div>
    )
    
}

export default SingleSelect;


