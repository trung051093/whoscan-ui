import Header from "@whoscan/core/components/Header";
import Footer from "@whoscan/core/components/Footer";
import Layout from "@whoscan/core/components/Layout";
import PageContent from "@whoscan/core/components/PageContent";

interface MainLayoutProps {
  children: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout
      header={<Header titleHeader="Main" />}
      footer={<Footer titleFooter="Powered by trungdq" />}
    >
      <PageContent>{children}</PageContent>
    </Layout>
  );
};

export default MainLayout;
