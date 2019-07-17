import React from 'react';

const Title = props => 
    <div>
        <h1>Aplikacja to do</h1>
        <h4>Pozostała liczba zadań: {props.NumberOfTasks}</h4>
    </div>

export default Title;