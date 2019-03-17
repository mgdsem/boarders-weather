import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';
import Checkbox from './Checkbox';

import { setInStorage, getFromStorage } from '../helpers/localStorage';


class Savinghandler extends Component {
    constructor(props) {
        super(props);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onSaveCity = this.onSaveCity.bind(this);
        this.onAsk = this.onAsk.bind(this);

        this.state = {
            isModalOpen: false,
            isDontAskChecked: false
        }
    }

    onOpenModal() {
        if (getFromStorage('doNotAskAgain')) {
            setInStorage('city', this.props.chosenCity);
        } else {
            this.setState({ isModalOpen: true });
        }
    }

    onCloseModal() {
        this.setState({ isModalOpen: false });
    }

    onSaveCity() {
        setInStorage('city', this.props.chosenCity);
        setInStorage('doNotAskAgain', this.state.isDontAskChecked);
    }

    onAsk() {
        this.setState((prevState) => ({
            isDontAskChecked: !prevState.isDontAskChecked
        }))
    }

    checkCity() {
        const savedCity = getFromStorage('city');
        if (!savedCity) {
            return false;
        }

        return savedCity.toLowerCase() === this.props.chosenCity.toLowerCase();
    }

    render() {
        return (
            <div>
                <Button onClick={this.onOpenModal} isDisabled={this.checkCity()}>Save</Button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    titleText="Are You sure?"
                    onClose={this.onCloseModal}
                    onConfirmClick={this.onSaveCity}
                >
                    <p className="text">The city will be saved in your local storage.</p>
                    <Checkbox
                        id="dont-show"
                        labelText="Do not ask again."
                        onChange={this.onAsk}
                        checked={this.state.isDontAskChecked}
                    />

                </Modal>
            </div>
        )
    }
}

export default Savinghandler;