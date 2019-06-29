import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';

const href = 'https://jijiteam.github.io/about-us';
const facebookHref = '#';
const twitterHref = '#';
const twitchHref = '#';
const gitHubHref = 'https://github.com/jijiteam';

const Footer = ({ t }) => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href={facebookHref}><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href={twitterHref}><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li className="list-inline-item"><a href={twitchHref}><FontAwesomeIcon icon={faTwitch} /></a></li>
            <li className="list-inline-item"><a href={gitHubHref}><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            <u><a href={href}>{t('project.title')}</a></u>
            {' '}
            {t('project.description')}
          </p>
          <p className="h6">
            &copy All right Reversed.
            <a
              className="text-green ml-2"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('project.name')}
            </a>
          </p>
        </div>
        <hr />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Footer);
