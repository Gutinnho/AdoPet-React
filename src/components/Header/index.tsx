import { Link } from "react-router-dom";
import { House, EnvelopeSimple, UserCircle } from "phosphor-react";
import { ReactComponent as Forma } from "assets/FormaNTop.svg";
import Logo from "components/Logo";

import styles from "./Header.module.scss";
import classNames from "classnames";

interface Props {
  perfil: boolean;
}

function Header({ perfil }: Props) {
  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.gridA]: true,
      })}
    >
      <div className={styles.header__forma}>
        <Forma className={styles["header__forma-svg"]} />
      </div>

      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div>
            <Link to="/gallery">
              <Logo color="white" variation="header" />
            </Link>
          </div>

          <Link className={styles["header__content-link"]} to="/">
            <House size={23} color="white" />
          </Link>

          <Link className={styles["header__content-link"]} to="/contact">
            <EnvelopeSimple size={23} color="white" />
          </Link>
        </div>

        {perfil === true ? (
          <div className={styles.header__perfil}>
            <Link to="/profile">
              <UserCircle size={50} color="#36D6AD" weight="thin" />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}

export default Header;
