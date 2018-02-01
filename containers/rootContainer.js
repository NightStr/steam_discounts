import React from 'react';


export default class RootContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        const changeSteamIdTimer = null;
        this.state = {
            steamId: null,
            orderBy: {},
            itemsList: {}
        }
    }

    onChangeSteamIdHandle = (steamId) => {
        console.log('changeSteamId');
        if (this.changeSteamIdTimer) {
            clearTimeout(this.changeSteamIdTimer)
        }
        // Чтобы часто не менять steam id.
        this.changeSteamIdTimer = setTimeout(
            this.setState({
                steamId: steamId
            }),
            200
        );
    }

    updateWishListHadle = () => {
        console.log('updateWishList');
        this.setState({
            itemsList: {}
        });
    }

    changeOrderBy = (columnName, order) => {
        this.setState({
            orderBy: Object.assign(this.state.orderBy, {
                columnName: orderBy
            })
        })
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
