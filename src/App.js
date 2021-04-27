import './App.css';
import "fontsource-roboto";
import {Typography} from "@material-ui/core";
import {Component} from "react";
import Inputs from "./component/CampoTexto";
import Modal from "./component/Mostrar_ocultar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Typography variant="h5" component="h5">
                        h5. Heading <br/>
                        <p>render typography</p>
                        <Inputs/>
                        <Modal/>
                    </Typography>
                </header>
            </div>
        );
    }
}

export default App;
