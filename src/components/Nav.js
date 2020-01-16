import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledNav, StyledNavList } from './styled/Nav';
import more from '../assets/more.png';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = lng => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <StyledNav>
      <li className="more">
        <div>
          <img src={more} alt="more" />
          <span>{t('more')}</span>
        </div>
        <StyledNavList>
          {t('nav', { returnObjects: true }).map(({ name, slash }, i) => (
            <li key={i}>
              <Link to={slash}>{name}</Link>
            </li>
          ))}
        </StyledNavList>
      </li>
      <span>|</span>
      <li className="language">
        <button
          type="button"
          onClick={() => changeLanguage(lang === 'en' ? 'cn' : 'en')}
        >
          {t('language')}
        </button>
      </li>
    </StyledNav>
  );
};

export default Nav;
