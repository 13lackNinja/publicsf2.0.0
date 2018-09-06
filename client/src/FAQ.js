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
      question="What are the club hours?"
      answer="Club hours vary by event, but last call is always at 1:45am"
    />
  </div>
)

export default FAQ
