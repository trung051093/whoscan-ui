import Header from "@whoscan/core/components/Header";
import Footer from "@whoscan/core/components/Footer";
import Layout from "@whoscan/core/components/Layout";
import PageContent from "@whoscan/core/components/PageContent";

interface AuthLayoutProps {
  children: any;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Layout
      header={<Header titleHeader="Auth" />}
      footer={<Footer titleFooter="Powered by trungdq" />}
    >
      <PageContent>{children}</PageContent>
    </Layout>
  );
};

export default AuthLayout;
