import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndexSamples from "./component/1samples/IndexSamples";
import IndexConditional from "./component/2conditional/IndexConditional";
import IndexList from "./component/3list/IndexList";
import IndexEvents from "./component/4events/IndexEvents";
import IndexState from "./component/5state/IndexState";
import IndexRender from "./component/6render/IndexRender";
import IndexRenderObject from "./component/7render-object/IndexRenderObject";
import IndexRenderArray from "./component/8render-array/IndexRenderArray";
import IndexStateManagement from "./component/9state-management/IndexStateManagement";
import IndexStateComponent from "./component/10state-between-components/IndexStateComponent";
import IndexPreservingState from "./component/11preserving-state/IndexPreservingState";
import IndexReducer from "./component/12reducer/IndexReducer";
import IndexContext from "./component/13context/IndexContext";
import IndexContextAndReducer from "./component/14contextAndReducer/IndexContextAndReducer";
import IndexUseRef from "./component/15useRef/IndexUseRef";
import IndexUseEffect from "./component/16useEffect/IndexUseEffect";
import IndexEffectEvent from "./component/17effectAndEvent/IndexEffectEvent";
import IndexCustomHook from "./component/18customHooks/IndexCustomHook";
import IndexForm from "./component/19form/IndexForm";

// Using react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="samples" element={<IndexSamples/>}/>
                    <Route path="conditional" element={<IndexConditional/>}/>
                    <Route path="list" element={<IndexList/>}/>
                    <Route path="events" element={<IndexEvents/>}/>
                    <Route path="state" element={<IndexState/>}/>
                    <Route path="render" element={<IndexRender/>}/>
                    <Route path="render-object" element={<IndexRenderObject/>}/>
                    <Route path="render-array" element={<IndexRenderArray/>}/>
                    <Route path="state-management" element={<IndexStateManagement/>}/>
                    <Route path="state-component" element={<IndexStateComponent/>}/>
                    <Route path="preserving-state" element={<IndexPreservingState/>}/>
                    <Route path="reducer" element={<IndexReducer/>}/>
                    <Route path="context" element={<IndexContext/>}/>
                    <Route path="context-reducer" element={<IndexContextAndReducer/>}/>
                    <Route path="use-ref" element={<IndexUseRef/>}/>
                    <Route path="use-effect" element={<IndexUseEffect/>}/>
                    <Route path="effect-event" element={<IndexEffectEvent/>}/>
                    <Route path="custom-hook" element={<IndexCustomHook/>}/>
                    <Route path="hook-form" element={<IndexForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);

// Without router
// <React.StrictMode>
//     <App/>
// </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
