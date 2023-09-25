import { Routes, Route } from "react-router-dom";

//styles
import "./style.css";

//pages
import Home from "./pages/Home";
import CheckAppointment from "./pages/CheckAppointment";
import CreatedAppointment from "./pages/CreatedAppointment";
import PickHourDatePage from "./pages/PickHourDatePage";
import FormPage from "./pages/FormPage";
import CreateAppointmentPage from "./pages/CreateAppointmentPage";
import CreatedAppointmentPage from "./pages/CreatedAppointmentPage";
import LoginPage from "./pages/LoginPage";
import PasswordRestore from "./pages/PasswordRestore";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/consultar-cita" element={<CheckAppointment />}></Route>
                <Route path="/crear-cita/hora-fecha" element={<PickHourDatePage />}></Route>
                <Route path="/crear-cita/formulario" element={<FormPage />}></Route>
                <Route path="/crear-cita/verificar" element={<CreateAppointmentPage />}></Route>
                <Route path="/cita-creada" element={<CreatedAppointmentPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/recuperar-password" element={<PasswordRestore />}></Route>
            </Routes>
        </div>
    );
}

export default App;
