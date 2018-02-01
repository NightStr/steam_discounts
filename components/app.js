import React from 'react';

class App extends React.PureComponent {
    render() {
        return(
            <div>
                <div className="steamid__input__wrapper">
                    <input placeholder="Имя Steam аккаунта" className="steamid__input" />
                    <button className="steamid__refresh_button">Обновить</button>
                </div>
            </div>
        )
    }
}

export default App;
