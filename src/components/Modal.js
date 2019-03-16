import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.onEscape = this.onEscape.bind(this);
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

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        return (
            <div className="modal__overlay">
                <div className="modal__inner-wrapper">
                    <h3 className="modal__title">{this.props.titleText}</h3>
                    <button onClick={this.props.onClose} className="modal__x">X</button>
                </div>
            </div>
        )
    }
}

export default Modal;