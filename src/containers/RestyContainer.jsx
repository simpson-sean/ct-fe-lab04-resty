import React, { Component } from  'react';
import Controls from '../components/resty/Controls';
import Header from '../components/resty/Header';
import Display from '../components/resty/Display';
// import History from '../components/history/History';
import { fetchAPI } from '../services/fetchAPI';
//import styles from '../css/resty.css';


export default class RestyContainer extends Component {

    state = {
        loading: false,
        url: '',
        method: '',
        userJson: '',
        history: [],
        response: {message: 'Howdy Stranger'}
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
        
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        
        const response = await fetchAPI(
            this.state.url, 
            this.state.method,
            this.state.userJson,        
        );
        
        this.setState({ response, loading: false })
        console.log('Button Clicked from RustyContainer', response);
        console.log('LOOK HERE', fetchAPI);
    };

    render() {
        const { response, loading, url } = this.state;
        return(
            <div>
                <Header />
                <Controls url={url} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                { loading 
                    ? <div>Loading...</div>
                    : <Display response={response} />  
                }
            </div>
        ) 
    } 
}
