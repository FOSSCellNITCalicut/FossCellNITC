import "./footer.css";
import logo1 from "../../images/Logo.svg";
import { FaInstagram, FaTwitter, FaPaperPlane, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo1" src={logo1} alt="Error" />
      <div className="container">
        <div className="row">
          <div className="footer_col">
            <ul>
              <li className="heading">About</li>
              <li>
                <a href="https://example.com/about">About FOSSCELL</a>
              </li>
              <li>
                <a href="https://example.com/team">Our team</a>
              </li>
              <li>
                <a href="https://example.com/timeline">Timeline</a>
              </li>
              <li>
                <a href="https://example.com/achievements">Achievements</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <ul>
              <li className="heading">Events</li>
              <li>
                <a href="https://example.com/fossmeet23">FOSSMeet'23</a>
              </li>
              <li>
                <a href="https://example.com/fossmeet19">FOSSMeet'19</a>
              </li>
              <li>
                <a href="https://example.com/gitworkshop">Git Workshop</a>
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <ul>
              <li className="heading">Social Media</li>
              <li>
                <a href="https://example.com/instagram">
                  <FaInstagram />
                  &nbsp;&nbsp;Instagram
                </a>
              </li>
              <li>
                <a href="https://example.com/twitter">
                  <FaTwitter />
                  &nbsp;&nbsp;Twitter
                </a>
              </li>
              <li>
                <a href="https://example.com/telegram">
                  <FaPaperPlane />
                  &nbsp;&nbsp;Telegram
                </a>
              </li>
              <li>
                <a href="https://example.com/discord">
                  <FaDiscord />
                  &nbsp;&nbsp;Discord
                </a>
              </li>
            </ul>
          </div>
          <div id="contact_us" className="footer_col">
            <ul>
              <li className="contact">Contact Us</li>
              <li>
                <FaEnvelope />
                &nbsp;&nbsp;Email
              </li>
              <li>
                <a href="mailto:fosscell@nitc.ac.in">fosscell@nitc.ac.in</a>
              </li>
              <li>
                <i className="fas fa-map-marked-alt" />
                &nbsp;&nbsp;Address
              </li>
              <li className="footers-footer">
                FOSSCELL NITC,
                <br />
                <p>NIT Calicut Mukkam Road, Kattangal Calicut, Kerala 673601</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
