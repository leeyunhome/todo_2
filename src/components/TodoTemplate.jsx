import React from 'react';
import './TodoTemplate.scss';
import imgA from './school_sign.png';
import { MdTraffic } from 'react-icons/md';


const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <img src={imgA} width="150px" />
            <MdTraffic />
            <div className="app-title">SCHOOLZONE</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;