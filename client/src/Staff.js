import React, { Component } from 'react'
import axios from 'axios'
import ActionButton from './ActionButton'
import Grit from './Grit'
import config from './config/config'

import './styles/Staff.css'

class CarouselImageChooser extends Component {
  state = {
    selectedFiles: [null, null, null]
  }

  fileSelectedHandler = (e, i) => {
    let selectedFiles = this.state.selectedFiles;
    selectedFiles.splice(i, 1, e.target.files[0]);
    this.setState({
      selectedFiles: selectedFiles
    });
  }

  fileUploadHandler = () => {
    const formData = new FormData();

    let uploadUrl = null;

    if (process.env.NODE_ENV === 'development') {
      uploadUrl = config.development.carouselUploadUrl;
    } else {
      uploadUrl = config.production.carouselUploadUrl;
    }

    const selectedFiles = this.state.selectedFiles;
    selectedFiles.forEach((file, i) => {
      if (file) {
        formData.append(`image${i + 1}`, file, file.name);
      }
    });

    axios.post(uploadUrl, formData)
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err.message));
  }

  render() {
    let url = null;

    if (process.env.NODE_ENV === 'development') {
      url = config.development.carouselUrl;
    } else {
      url = config.production.carouselUrl;
    }

    return (
      <React.Fragment>
        <h1>Carousel Image Chooser</h1>
        <form
          id='carousel-image-form'>
          <div id='image-chooser-1' className='image-chooser'>
            <label htmlFor="image1">Image 1</label>
            <img src={url + '1'} alt=""/>
            <input
              name="image1"
              type="file"
              accept='.png, .jpg'
              onChange={
                (e) => this.fileSelectedHandler(e, 0)
              }
              ref={fileInput1 => this.fileInput1 = fileInput1}
            />
            <ActionButton
              text='Choose File'
              color="white"
              type='button'
              submit={() => this.fileInput1.click()}
            />
          </div>
          <div className="image-chooser">
            <label htmlFor="image2">Image 2</label>
            <img src={url + '2'} alt=""/>
            <input
              name="image2"
              type="file"
              accept='.png, .jpg'
              onChange={
                (e) => this.fileSelectedHandler(e, 1)
              }
              ref={fileInput2 => this.fileInput2 = fileInput2}
            />
            <ActionButton
              text='Choose File'
              color="white"
              type='button'
              submit={() => this.fileInput2.click()}
            />
          </div>
          <div className="image-chooser">
            <label htmlFor="image3">Image 3</label>
            <img src={url + '3'} alt=""/>
            <input
              name="image3"
              type="file"
              accept='.png, .jpg'
              onChange={
                (e) => this.fileSelectedHandler(e, 2)
              }
              ref={fileInput3 => this.fileInput3 = fileInput3}
            />
            <ActionButton
              text='Choose File'
              color="white"
              type='button'
              submit={() => this.fileInput3.click()}
            />
          </div>
        </form>
        <ActionButton
          text='submit'
          color="white"
          location='staff'
          submit={this.fileUploadHandler}
        />
      </React.Fragment>
    )
  }
}

const Staff = () => (
  <div id="staff">
    <CarouselImageChooser/>
    <Grit/>
  </div>
)

export default Staff
