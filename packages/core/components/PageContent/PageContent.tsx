import Container, { ContainerProps } from "@mui/material/Container";
import classes from "./PageContent.module.css";

export interface PageContentProps extends ContainerProps {}

const PageContent = ({ children, ...props }: PageContentProps) => {
  return <Container {...props} className={classes.pageContent}>{children}</Container>;
};

export default PageContent;
