import React from 'react';
import * as classes from './Footer.module.scss';
import Fade from 'react-reveal/Fade';

const Footer = (props) => {
  const copyright = <div className={`footer-copyright text-center py-3 text-light ${classes.Footer__copyright}`}>© 2019 Copyright:
                      <span className={classes.Footer__myname}>{"<"}Marta Niemiec{"/ >"}</span>
                    </div>

  return (
    <footer id="footer" className={`page-footer font-small special-color-dark ${classes.Footer}`} style={{ overflow: "hidden" }}>
      <Fade bottom delay={1000}>
        {copyright}
      </Fade>
    </footer>
  );
};

export default Footer;