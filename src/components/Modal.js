import React, { Component } from 'react';

import Button from './Button';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.onEscape = this.onEscape.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onEscape);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onEscape);
    }

    onEscape(e) {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    onConfirm() {
        this.props.onClose();
        this.props.onConfirmClick();
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        return (
            <div className="modal__overlay">
                <div className="modal__inner-wrapper">
                    <button onClick={this.props.onClose} className="modal__x">X</button>
                    <h3 className="modal__title">{this.props.titleText}</h3>
                    <div>
                        {this.props.children}
                    </div>
                    <div className="modal__button-wrapper">
                        <Button onClick={this.onConfirm}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;