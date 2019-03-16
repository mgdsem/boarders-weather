import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';

import { setInStorage } from '../helpers/localStorage';

class Savinghandler extends Component {
    constructor(props) {
        super(props);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onSaveCity = this.onSaveCity.bind(this);

        this.state = {
            isModalOpen: false,
        }
    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    }

    onCloseModal() {
        this.setState({ isModalOpen: false });
    }

    onSaveCity() {
        setInStorage('city', this.props.chosenCity);
    }

    render() {
        return (
            <div>
                <Button onClick={this.onOpenModal}>Save</Button>
                <Modal isOpen={this.state.isModalOpen} titleText="Are You sure?" onClose={this.onCloseModal} onConfirmClick={this.onSaveCity}>
                    <p className="text">The city will be saved in your local storage.</p>
                </Modal>
            </div>
        )
    }
}

export default Savinghandler;