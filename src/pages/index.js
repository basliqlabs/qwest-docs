import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Qwest Docs holds the reports, issues, milestones, ideas, dreams, and software documentation.">
      <main>
      </main>
    </Layout>
  );
}
