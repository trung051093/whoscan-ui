import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface HeaderProps extends AppBarProps {
  titleHeader?: string | JSX.Element;
  logo?: string | JSX.Element;
  action?: JSX.Element;
}

const Header = ({
  titleHeader,
  logo,
  action,
  children,
  ...props
}: HeaderProps) => {
  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <div className="logo">
          <img src={logo} />
        </div>
      );
    } else if (typeof logo === "symbol") {
      return logo;
    }
    return null;
  };

  const renderTitle = () => {
    if (typeof titleHeader === "string") {
      return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titleHeader}
        </Typography>
      );
    } else if (typeof titleHeader === "symbol") {
      return titleHeader;
    }
    return null;
  };

  return (
    <AppBar {...props}>
      <Toolbar>
        {renderLogo()}
        {renderTitle()}
        {action}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
