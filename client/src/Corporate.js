import React from 'react'
import HeroImage from './HeroImage'
import ContactForm from './ContactForm.js'
import NewsletterSignUp from './NewsletterSignUp.js'

import './styles/Corporate.css'

import mainroomImage from './images/mainroom.png'

import corporateImage1 from './images/corporate1.jpg'
import corporateImage2 from './images/corporate2.jpg'
import corporateImage3 from './images/corporate3.jpg'
import corporateImage4 from './images/corporate4.jpg'

const Prompt = () => (
  <div id="prompt">
    <p>
      Take the "office" out of your office party
    </p>
  </div>
)

const CorporateImage = (props) => (
  <div
    id={props.id}
    className="corporate-image"
    style={{ backgroundImage: `url(${props.image})` }}
  ></div>
)

const CorporateInfo = () => (
  <div id="corporate-info-container">
    <div
      className="corporate-info-section"
      id="corporate-info-section-1"
    >
      <div
        className="corporate-info-text"
        id="corporate-info-text-1"
      >
        <h2>
          Public Works is a ground-breaking event space in san francisco's mission district. It may be the game-changer you're looking for:
        </h2>
        <ul>
          <li>
            Dedicated, in-house event support
          </li>
          <li>
            Multiple bars with skilled mixologists at your disposal (non-alcohol options available)
          </li>
          <li>
            Proven, diverse network of caterers, from gourmet, seated courses to irreverent street food trucks
          </li>
          <li>
            Art direction and design services to fully customize or "brand" your event
          </li>
          <li>
            Eclectic entertainment roster to create a memorable experience or set the mood for your guests
          </li>
          <li>
            Shuttle or Party Bus to/from anywhere in the Bay Area
          </li>
          <li>
            Secure, on-site bike parking
          </li>
        </ul>
      </div>
      <div
        className="corporate-image-container"
        id="corporate-image-container-1"
      >
        <CorporateImage
          id="corporateImage1"
          image={corporateImage1}
        />
        <CorporateImage
          id="corporateImage2"
          image={corporateImage2}
        />
      </div>
    </div>
    <div
      className="corporate-info-section"
      id="corporate-info-section-2"
    >
      <div
        className="corporate-image-container"
        id="corporate-image-container-2"
      >
        <CorporateImage
          id="corporateImage3"
          image={corporateImage3}
        />
        <CorporateImage
          id="corporateImage4"
          image={corporateImage4}
        />
      </div>
      <div
        className="corporate-info-text"
        id="corporate-info-text-2"
      >
        <h2>Showcase your company, organization or art in our unique space. Public Works is an ideal location for:</h2>
        <ul>
          <li>Board Meetings</li>
          <li>Birthdays</li>
          <li>Conferences</li>
          <li>Dance / Movement Performance</li>
          <li>Film Screenings</li>
          <li>Fundraisers</li>
          <li>Galas</li>
          <li>Holiday Parties</li>
          <li>Retreats</li>
          <li>Seminars</li>
        </ul>
      </div>
    </div>
  </div>
)

const FormInstructions = () => (
  <div id="form-instructions">
    <h2>
      To book an event, schedule a tour, or inquire about booking opportunities, please contact us using the form below. You can view venue specs <a href="/specs">here</a>
    </h2>
  </div>
)

const Corporate = () => (
  <div id="corporate">
    <HeroImage image={mainroomImage} text="Corporate"/>
    <Prompt />
    <CorporateInfo />
    <FormInstructions />
    <ContactForm />
    <NewsletterSignUp />
  </div>
)

export default Corporate
