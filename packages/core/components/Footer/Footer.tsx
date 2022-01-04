import classNames from "classnames";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import classes from "./Footer.module.css";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  titleFooter?: string;
}

const Footer = ({ titleFooter, ...props }: FooterProps) => {
  const renderTitle = () => {
    if (typeof titleFooter === "string") {
      return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titleFooter}
        </Typography>
      );
    } else if (typeof titleFooter === "symbol") {
      return titleFooter;
    }
    return null;
  };
  return (
    <div {...props} className={classNames(classes.footer, props.className)}>
      <Toolbar>{renderTitle()}</Toolbar>
    </div>
  );
};

export default Footer;
