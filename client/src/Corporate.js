import React from 'react'
import HeroImage from './HeroImage'
import Marquee from './Marquee.js'
import ContactForm from './ContactForm.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/Corporate.css'

import mainroomImage from './images/mainroom.png'

import corporateImage1 from './images/corporate1.jpg'
import corporateImage2 from './images/corporate2.jpg'
import corporateImage3 from './images/corporate3.jpg'
import corporateImage4 from './images/corporate4.jpg'

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
          Public Works is a multi-purpose arts and event space located in the heart of San Francisco's Mission District.
        </h2>
        <p>
          We host corporate events, galas, birthdays, team outings, film screenings, holiday parties, seminars, retreats and more ranging from 15 to 800 people.
        </p>
        <p>
          You can rent the, main room, the loft, or the entire venue, and our decicated in-house support team will work with you to create a memorable experience for your audience.
        </p>
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
        <h2>Our venue features:</h2>
        <ul>
          <li>Professional and experienced event staff</li>
          <li>Top of the line audio and visual production including our world-class Funktion One sound system</li>
          <li>Multiple bars with skilled mixologists at your service</li>
          <li>Vibrant interior design featuring artisan-made furniture and local artwork</li>
          <li>Sprung hardwood dance floor</li>
          <li>Diverse network of caterers, from gourmet cuisine to irreverent food trucks</li>
          <li>Convenient access from public transportation</li>
          <li>Art direction and design services to fully customize your event</li>
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

const FinalNote = () => (
  <div id="final-note">
    <h2>
      As part of our commitment to the community, we donate a portion of event proceeds to local non-profits such as <a href="">Root Division</a>, an organization that provides art classes for under-funded San Francisco schools. We also offer a special rate to non-profits.
    </h2>
  </div>
)

const Corporate = () => (
  <div id="corporate">
    <HeroImage image={mainroomImage} text="Corporate"/>
    <Marquee text="Take the 'office' out of your office party" />
    <CorporateInfo />
    <FormInstructions />
    <ContactForm />
    <FinalNote />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default Corporate
