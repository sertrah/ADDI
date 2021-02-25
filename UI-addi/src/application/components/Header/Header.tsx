import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "application/components";

type HeaderProps = {
  menu: { title: string; path: string }[];
};

const Header: FunctionComponent<HeaderProps> = ({ menu }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <nav className="navbar">
      {menu.map(({ title, path }, i) => (
        <Button
          id={`text-button-${i}`}
          key={title}
          onClick={() => {
            history.push(path);
          }}
        >
          {title}
        </Button>
      ))}
    </nav>
  );
};

export default Header;
