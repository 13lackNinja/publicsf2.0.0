import React from 'react'
import HeroImage from './HeroImage'
// import Marquee from './Marquee.js'
import ContactForm from './ContactForm.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/PrivateEvents.css'

import mainroomImage from './images/mainroom.png'
import corporateImage1 from './images/corporate1_dark.jpg'
// import corporateImage2 from './images/corporate2.jpg'
// import corporateImage3 from './images/corporate3.jpg'
import corporateImage4 from './images/corporate4_dark.jpg'

const PrivateEventsInfo2 = () => (
  <div id="private-events-info">
    <h2>Take the 'office' out of your office party</h2>
    <p>
      Public Works has hosted corporate events, galas, birthdays, team outings, film screenings, holiday parties, seminars, retreats and more ranging from 15 to 800 people. You can rent the loft or the entire venue, and our dedicated in-house support team will work with you to create an event your attendees will never forget.
    </p>
    <img src={mainroomImage} alt="corporate1.jpg"/>
    <h2>Our venue Features:</h2>
    <ul>
      <li>
        Professional and experienced event staff
      </li>
      <li>
        Top of the line audio and visual production including our world-class Funktion One sound system
      </li>
      <li>
        Multiple bars with skilled mixologists at your disposal (non-alcohol options available)
      </li>
      <li>
        Vibrant interior design featuring artisan-made furniture and modern artwork by local artists
      </li>
      <li>
        Sprung hardwood floors – great for dancing
      </li>
      <li>
        Proven, diverse network of caterers, from gourmet, seated courses to irreverent street food trucks
      </li>
      <li>
        Convenient to public transportation, Highway 101 and the Bay Bridge
      </li>
      <li>
        Art direction, entertainment options, and design services to fully customize your event
      </li>
      <li>
        Shuttle or party bus to/from anywhere in the Bay Area
      </li>
      <li>
        Secure on-site bike parking
      </li>
    </ul>
    <img src={corporateImage4} alt="corporate2.jpg"/>
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
      As part of our commitment to the community, we donate a portion of event proceeds to local non-profits such as <a href="https://www.rootdivision.org/">Root Division</a>, an organization that provides art classes for under-funded San Francisco schools. We also offer a special rate to non-profits.
    </h2>
  </div>
)

const PrivateEvents = () => (
  <div id="private-events">
    <HeroImage image={corporateImage1} text="Private Events"/>
    {/* <Marquee text="Take the 'office' out of your office party" /> */}
    <PrivateEventsInfo2/>
    <FormInstructions />
    <ContactForm />
    <FinalNote />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default PrivateEvents
