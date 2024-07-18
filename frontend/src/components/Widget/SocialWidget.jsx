import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        <Link to="https://m.facebook.com/jabalpurfertilitycentre/">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link to="https://www.youtube.com/@JabalpurFertilityCentre">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link to="https://www.linkedin.com/in/jabalpur-fertility-centre-97504a227/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link to="https://x.com/jabalpurivf1">
          <Icon icon="fa-brands:twitter" />
        </Link>
        <Link to="https://www.instagram.com/jabalpurfertilitycentreivf?igsh=Y2dzN2d3NzExaDNn">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
