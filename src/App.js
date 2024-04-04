import { BrowserRouter as GrandParent, Routes as Parent ,Route as Child} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';
import Layout from "./pages/Layout";

export function App() {
    return (
        <GrandParent>
            <Parent>
                <Child path="/" element={<Layout/>}>
                    <Child index element={<Home/>}></Child>
                    <Child path="login" element={<Login/>}></Child>
                    <Child path="register" element={<Register/>}></Child>
                    <Child path="*" element={<NotFound/>}></Child>
                </Child>
            </Parent>
        </GrandParent>
    )
}