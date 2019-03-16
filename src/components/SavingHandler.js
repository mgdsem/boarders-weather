import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';

class Savinghandler extends Component {
    constructor(props) {
        super(props);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);

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

    render() {
        return (
            <div>
                <Button onClick={this.onOpenModal}>Save</Button>
                <Modal isOpen={this.state.isModalOpen} titleText="Are You sure?" onClose={this.onCloseModal} />
            </div>
        )
    }
}

export default Savinghandler;