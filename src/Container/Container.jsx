import React from "react";
import "./Container.css"
import Modal from "../Modal/Modal"
import Pagina2 from "../Pagina2/pagina2";


const Container = () => {

    const [modal, setModal] = React.useState(false);

    function abrirModal(){
        setModal(true);
    }
    function fecharModal(){
        setModal(false)
    }

    return(
        <> 
        <div className="Container">
            <button onClick={abrirModal}>SUBMIT</button>
         <Modal 
         
         abrir={modal}
         fechar={fecharModal} 
         
        img='"http://www.w3.org/2000/svg"'  
         texto={'Thank you!'}
        h2={"Lorem ipson =bicgwibwfhgccvwjchbwkcj"}
        />
         <button onClick={fecharModal}>fechar</button>
     
        </div>   
        <div> 
          
       
          
      
        </div>
        </>
    )
}
export default Container;