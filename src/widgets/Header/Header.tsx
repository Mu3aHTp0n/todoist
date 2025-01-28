import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header} >
      <Link to={'/boards'}>
        <i className={styles.header__link}>
          <FontAwesomeIcon icon={faFaceSmile} />
        </i>
      </Link>
    </header>
  )
}
