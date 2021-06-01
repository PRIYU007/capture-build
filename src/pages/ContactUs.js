// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <h1>Contact Us</h1>

      <div className="icons">
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <FontAwesomeIcon
          icon={faTwitter}
          size="3x"
          style={{ color: '#1DA1F2' }}
        />
      </div>
    </motion.div>
  );
};

export default ContactUs;
