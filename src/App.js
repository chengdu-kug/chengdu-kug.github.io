import './styles/App.css';
import Main from "./pages/main";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Events from "./pages/events";
import Advance from "./pages/advance";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <div className="navbar-logo">
                    <img
                        style={{display: "block", borderRadius: "100%"}}
                        src="/cd.jpg"
                        alt="cd_logo"
                        width={40}
                        height={40}
                    />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="/" target="_top" rel="noopener noreferrer">成都&nbsp;KUG</a>
                </div>

                <div className="navbar-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/github.svg"
                            alt="bj_kug_logo"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a href="/events" target="_top" rel="noopener noreferrer">分享会</a>
                    <a href="https://kotlinlang.org/" target="_top" rel="noopener noreferrer">Kotlin官方</a>
                    <a href="https://www.kotlincn.net/" target="_top" rel="noopener noreferrer">中文文档</a>
                    <a href="/advance" target="_top" rel="noopener noreferrer">Kotlin进阶</a>
                </div>
            </div>

            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/advance" element={<Advance/>}/>
                    <Route path="*" element={<Main/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
