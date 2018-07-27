import React from 'react'

import './styles/FAQ.css'

import downArrow from './images/down_arrow.svg'

const FAQ = () => (
  <div className="contact-section" id="faq-container">
    <h4 id="faq-header">FAQs:</h4>
    <div className="faq-item">
      <div className="question-box text-container" id="question-box-1">
        <p className="faq-text question-text">How can I check for my lost items?</p>
        <img src={downArrow} alt="down_arrow.svg" className="dropdown-arrow" id="faq-expand-1" />
      </div>
      <div className="answer-box text-container" id="answer-box-1">
        <p className="faq-text answer-text" >Please use our contact form to check our lost and found. In your submission, please describe your lost item(s) in detail. We typically respond within one or two business days.</p>
      </div>
    </div>
    <div className="faq-item">
      <div className="question-box text-container" id="question-box-2">
        <p className="faq-text question-text">Do you provide bottle service?</p>
        <img src={downArrow} alt="down_arrow.svg" className="dropdown-arrow" id="faq-expand-2" />
      </div>
      <div className="answer-box text-container"  id="answer-box-2">
        <p className="faq-text answer-text">We do not provide bottle service at Public Works</p>
      </div>
    </div>
    <div className="faq-item">
      <div className="question-box text-container" id="question-box-3">
        <p className="faq-text question-text">Do you have any job openings?</p>
        <img src={downArrow} alt="down_arrow.svg" className="dropdown-arrow" id="faq-expand-3" />
      </div>
      <div className="answer-box text-container" id="answer-box-3">
        <p className="faq-text answer-text">We are always on the lookout for talented and versatile individuls with a passion for live events. If this is you, please use our contact form to submit a resume and cover letter.</p>
      </div>
    </div>
  </div>
)

export default FAQ
