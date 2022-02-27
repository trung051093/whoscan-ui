import Container, { ContainerProps } from "@mui/material/Container";
import classes from "./PageContent.module.css";
import classNames from 'classnames'

export interface PageContentProps extends ContainerProps {}

const PageContent = ({ children, ...props }: PageContentProps) => {
  return <Container {...props} className={classNames(classes.pageContent, props.className)}>{children}</Container>;
};

export default PageContent;
