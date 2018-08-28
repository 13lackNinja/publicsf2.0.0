import React from 'react'
import NewsletterSignUp from './NewsletterSignUp.js'

import './styles/Specs.css'

const SpecsInfo = () => (
  <div id="specs">
    <h1>Specifications</h1>

    <p className="spec-paragraph">Public Works is a diverse and adaptable event space in San Francisco’s Mission District. The venue features state of the art audio, video, and production capabilities suitable for all types of events.</p>

    <p className="spec-paragraph">Whether you’re looking to host a corporate event with slideshow-style presentations featuring crisp text and rich graphics or promote a cutting-edge music event, Public Works has everything you need to create an immersive, eye-popping visual experience.</p>

    <h2>Main Room</h2>

    <h4>Video</h4>

    <ul>
      <div>
        <li>(3) Viewsonic PJL7211 2.2k lumen projectors (1024×768 native resolution) [covering side & rear walls of the venue]</li>
        <li>(1) Panasonic D5600U 5k lumen projector (1024×768 native resolution, support up to 1080i) [rear wall coverage only]</li>
        <li>(1) Extron 8×8 VGA Switcher</li>
        <li>(1) Matrox Triplehead (feeds the (3) PJL7211s projectors to create a continuous 3072×768
        projection covering rear & side walls)</li>
      </div>
      <div>
        <li>(2) LG Blu-Ray Players (capable of DVD, Blu-Ray, MP2, MP4, JPEG playback via optical disc
        & USB)</li>
        <li>(1) custom built PC video server running Windows 7, Resolume Arena 4, Nvidia GTX 750
        (capable of ~45 FPS @ 3072×768)</li>
        <li>XLR stereo audio feed, adapters available</li>
        <li>various HDMI, VGA, DVI, mini-DisplayPort, and composite video converters/adapters
        Main Room Video Matrix Connection Diagram:</li>
      </div>
    </ul>


    <h4>Outputs</h4>

    <ul>
      <div>
        <li>Stage VGA</li>
        <li>Desk VGA</li>
        <li>Desk HDMI</li>
        <li>HDMI 2</li>
      </div>
      <div>
        <li>Triplehead #1</li>
        <li>Triplehead #2</li>
        <li>Triplehead #3</li>
        <li>Loft Out</li>
      </div>
    </ul>

    <h4>Inputs</h4>

    <ul>
      <div>
        <li>PJL7211 #1</li>
        <li>PJL7211 #2</li>
        <li>PJL7211 #3</li>
      </div>
      <div>
        <li>D5600U</li>
        <li>Loft Matrix In</li>
        <li>Computer Monitor</li>
      </div>
    </ul>


    <h2>Loft</h2>


    <h4>Video</h4>

    <ul>
      <div>
        <li>(2) NEC NP-M300XS 3k lumen projectors (1024×768 native resolution, support up to 1080p)</li>
      </div>
      <div>
        <li>(1) HDMI to VGA adapter – Extron 4×4 VGA Matrix</li>
      </div>
    </ul>

    <h4>Outputs</h4>

    <ul>
      <div>
        <li>Side Wall NP-M300XS</li>
      </div>
      <div>
        <li>Rear Wall NP-M300XS</li>
      </div>
    </ul>

    <h4>Inputs</h4>

    <ul>
      <div>
        <li>Main Room Feed</li>
        <li>LG Blu-Ray Player</li>
      </div>
      <div>
        <li>Aux VGA 1</li>
        <li>Aux VGA 2</li>
      </div>
    </ul>
  </div>
)

const Specs = () => (
  <div id="specs">
    <SpecsInfo />
    <NewsletterSignUp />
  </div>
)

export default Specs
