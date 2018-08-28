import React, {Component} from 'react'

import './styles/FAQ.css'

import downArrow from './images/down_arrow.svg'

class FAQitem extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      'isOpen': false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(
      this.state.isOpen ? { 'isOpen': false } : { 'isOpen': true }
    );
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <div className="faq-item" onClick={this.toggle}>
          <p className="faq-question">{this.props.question}</p>
          <img
            className="dropdown-arrow"
            src={downArrow}
            alt="down_arrow.svg"
          />
        </div>
      )
    } else {
        return (
          <div className="faq-item" onClick={this.toggle}>
            <p className="faq-question">{this.props.question}</p>
            <p>{this.props.answer}</p>
            <img
              className="dropdown-arrow"
              src={downArrow}
              alt="down_arrow.svg"
            />
          </div>
        )
      }
    }
  }


const FAQ = () => (
  <div className="contact-section" id="faq">
    <h4>FAQs:</h4>
    <FAQitem
      question="Is Public Works strictly 21 and over?"
      answer="Yes."
    />
    <FAQitem
      question="Is there a dress code?"
      answer="No dress code."
    />
    <FAQitem
      question="Is there parking at Public Works?"
      answer="There is street parking in the neighborhood. There is a public, paid lot on 14th St. between Valencia St. and Mission St."
    />
    <FAQitem
      question="Is Public Works accessible via public transportation?"
      answer="Yes. There are BART stations within 3 blocks. MUNI buses drop off within 1 block."
    />
    <FAQitem
      question="Do you have a coat check?"
      answer="For most events, yes."
    />
    <FAQitem
      question="Is there food nearby?"
      answer="Yes. There are numerous restarants and cafes within walking distance of Public Works."
    />
    <FAQitem
      question="When do you stop serving alcohol?"
      answer="California state law requires acohol service to stop at 2am regarless of event end time."
    />
    <FAQitem
      question="How can I participate further in the community?"
      answer="Our newsletter is the best way to engage with us. By subscribing you get access to rewards made with love for our loyal fans."
    />
  </div>
)

export default FAQ
