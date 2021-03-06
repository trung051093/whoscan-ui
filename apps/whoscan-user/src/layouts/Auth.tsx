import Header from "@whoscan/core/components/Header";
import Footer from "@whoscan/core/components/Footer";
import Layout from "@whoscan/core/components/Layout";
import PageContent from "@whoscan/core/components/PageContent";
import classes from './Auth.module.css';

interface AuthLayoutProps {
  children: any;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Layout
      header={<Header titleHeader="Auth" />}
      footer={<Footer titleFooter="Powered by trungdq" />}
    >
      <PageContent className={classes.authPageContent}>{children}</PageContent>
    </Layout>
  );
};

export default AuthLayout;
