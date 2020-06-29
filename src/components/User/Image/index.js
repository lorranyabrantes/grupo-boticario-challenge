import React from 'react';
import "./styles.css";

import ImageDefault from "../../../assets/img/icon-user.png";

class UserImage extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null,
        };
    }

    LOCAL_IMAGE = "@user-image";

    componentDidMount() {
        const { src } = this.props;

        if (src) {
            this.setState({ image: src });
        } else {
            this.useLocalStorage();
        }
    }

    useLocalStorage() {
        const localImage = localStorage.getItem(this.LOCAL_IMAGE);

        if (localImage) {
            this.setState({ image: localImage });
        } else {
            this.setState({ image: ImageDefault });
        }
    }

    handleAddImage() {
        document.getElementById("user-image").click();
    }

    saveImage = (element) => {
        const file = element.target.files[0];

        this.getBase64(file).then(base64 => {
            localStorage.setItem(this.LOCAL_IMAGE, base64);
            this.setState({ image: base64 });
        });
    };

    getBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    render = () => {
        const { image } = this.state;

        return (
            <div className="user__image">
                <div className="user__box-image">
                    {image && <img src={image} alt="" />}
                </div>

                <input
                    type="file"
                    id="user-image"
                    name="user-image"
                    className="user__input-file"
                    onChange={this.saveImage}
                />

                <button
                    className="user__add-image"
                    onClick={this.handleAddImage}
                >+</button>
            </div>
        )
    }
}

export default UserImage;