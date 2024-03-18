import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Basic from './components/Basic';
import Hobbies from './components/Hobbies';
import LookingFor from './components/LookingFor';
import Technican from './components/Technican';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { portfols: [], loading: true };
    }

    render() {
        return (
            <div>

                <h1 id="tabelLabel" style={{
                    position: 'fixed', // Зафиксировать элемент
                    top: '300px', // Отступ сверху
                    left: '50%', // Расположить по центру горизонтали
                    transform: 'translateX(-50%)', // Сдвинуть назад на половину ширины элемента
                    zIndex: 1000, // Убедиться, что элемент будет поверх другого контента
                }}>
                    Portfolio Info
                </h1>

                <ul>
                    <li style={{ "--clr": '#2483ff' }}>
                        <a href="/main">
                            <i className="fa-solid fa-house"></i>
                            <span>Main</span>
                        </a>
                    </li>

                    <li style={{ "--clr": "#fff200" }}>
                        <a href="/basic">
                            <i className="fa-solid fa-user"></i>
                            <span>Basic</span>
                        </a>
                    </li>

                    <li style={{ "--clr": '#ff253f' }}>
                        <a href="/hobbies">
                            <i className="fa-solid fa-heart"></i>
                            <span>Hobbies</span>
                        </a>
                    </li>

                    <li style={{ "--clr": '#25d366' }}>
                        <a href="/technican">
                            <i className="fa-solid fa-gear"></i>
                            <span>Technican</span>
                        </a>
                    </li>

                    <li style={{ "--clr": '#f32ec8' }}>
                        <a href="/lookingFor">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Looking For</span>
                        </a>
                    </li>
                </ul>                

                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/basic" element={<Basic />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/lookingFor" element={<LookingFor />} />
                    <Route path="/technican" element={<Technican />} />
                </Routes>

                </div>
        );
    }
}
