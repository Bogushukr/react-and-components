import React, { Component } from 'react';

class PaymentForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Stripe.setPublishableKey('THE-PUBLIC-KEY');
    }

    handleSubmit(e) {
        e.preventDefault();
        Stripe.card.createToken(e.currentTarget, (status, response) => {
            console.log(status, response);
        });
    }

    render() {
        //THE PAYMENT FORM
    }
}