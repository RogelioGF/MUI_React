import React, {useState} from "react";
import Button from '@material-ui/core/Button';

const Modal = () => {
    /**
     *  Using the useState hook, you have to pay atention to 3 elements:
     *  - opened: a variable that will change over time (can have any name)
     *  - setOpened:  a function that resets the value of opened (can by any name)
     *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
     */
    const [opened, setOpened] = useState(true);

    //if opened === true, I show the modal, else i show the button to open the modal
    return opened ? (
        <div>
            <h2>Hola :)</h2>
            <Button variant="contained" color="primary" onClick={() => setOpened(false)}>
                Cerrar
            </Button>
        </div>
    ) : (
        <Button variant="contained" color="secondary" onClick={() => setOpened(true)}>
            Abrir
        </Button>
    );
}

export default Modal;