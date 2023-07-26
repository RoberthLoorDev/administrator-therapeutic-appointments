import { Routes, Route } from "react-router-dom";

//styles
import "./style.css";

//pages
import Home from "./pages/Home";
import CreateAppointment from "./pages/CreateAppointment";
import CheckAppointment from "./pages/CheckAppointment";
import CreatedAppointment from "./pages/CreatedAppointment";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/crear-cita" element={<CreateAppointment />}></Route>
                <Route path="/consultar-cita" element={<CheckAppointment />}></Route>
                <Route path="/created-appointment" element={<CreatedAppointment />}></Route>
            </Routes>
        </>
    );
}

export default App;
