import { BrowserRouter as GrandParent, Routes as Parent ,Route as Child} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export function App() {
    return (
        <GrandParent>
            <Parent>
                <Child path="" element={<Home/>}></Child>
                <Child path="/login" element={<Login/>}></Child>
                <Child path="/register" element={<Register/>}></Child>
                <Child path="*" element={<NotFound/>}></Child>
            </Parent>
        </GrandParent>
    )
}