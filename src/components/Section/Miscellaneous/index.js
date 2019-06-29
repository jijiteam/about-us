import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import imgPlaceholder from './img-placeholder-dark.jpg';
import rdsImg from './rds.png';

import './Miscellaneous.scss';

const Miscellaneous = ({ t }) => (
  <section id="news">
    <div className="container">
      <div className="card-columns">

        <div className="card">
          <img src={rdsImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{t('section.miscellaneous.rds.title')}</h5>
            <p className="card-text">{t('section.miscellaneous.rds.text')}</p>
          </div>
        </div>

        <div className="card">
          <img src={imgPlaceholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{t('section.miscellaneous.creation.title')}</h5>
            <p className="card-text">{t('section.miscellaneous.creation.text')}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

Miscellaneous.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Miscellaneous);
