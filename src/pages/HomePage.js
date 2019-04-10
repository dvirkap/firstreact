import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import BitcoinService from '../services/BitcoinService'


export class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            bitCoin: null,
        }

    }
    async componentDidMount() {
        console.log('this.state:::::',this.state);
        const user = ContactService.getUser()
            await this.setState({user})
                BitcoinService.getRate(this.state.user.coins).then((res) => this.setState({ bitCoin: res }))
        }
    // async componentWillMount() {
    //     const user = ContactService.getUser()
    //     await this.setState({user})
    //         BitcoinService.getRate(this.state.user.coins).then((res) => this.setState({ bitCoin: res }))
    // }

    render() {
        // console.log(this.state.bitCoin);
        return (
            // <div>HomePage</div>
            <section>
                 {this.state.bitCoin && <div>
                <h3>Hello {this.state.user.name}!</h3>
                <h4>You got: {this.state.user.coins} coins</h4>
                <h4>Converted: {this.state.bitCoin} </h4>
                </div>}
            </section>
        )
    }
}