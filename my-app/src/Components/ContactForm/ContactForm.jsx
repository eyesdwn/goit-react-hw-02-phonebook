import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name && this.state.number) {
            this.props.onAddContact({ ...this.state})
        }
        this.clearState();
    };

    clearState = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
        return (
        <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input1}
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Number
                <input
                  className={styles.input2}
                  type="text"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                />
              </label>
              <button className={styles.button} type="submit">Add Contact</button>
        </form>
      );
    }
}