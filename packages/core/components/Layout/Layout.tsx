import Box from "@mui/material/Box";

export interface LayoutProps {
  className?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
  children: JSX.Element;
}

const Layout = ({ className, header, footer, children }: LayoutProps) => {
  return (
    <Box className={className}>
      {header}
      {children}
      {footer}
    </Box>
  );
};

export default Layout;
