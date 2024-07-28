import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import s from "./index.module.css";
import Translate from "@docusaurus/Translate";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Qwest Docs holds the reports, issues, milestones, ideas, dreams, and software documentation."
    >
      <main>
        <section className={`${s.hero} ${s.section}`}>
          <figure className={s.figure}>
            <img src="img/logo.png" />
          </figure>
          <div className={s.content}>
            <h1>
              <Translate>Qwest</Translate>
            </h1>
            <p>
              <Translate>
                The simplest project management tool ever known to mankind
              </Translate>
            </p>
          </div>
          <Link className={s.specialLink} to="/docs/main/intro">
            <Translate>Get Started with Qwest</Translate> 🤙
          </Link>
        </section>
      </main>
    </Layout>
  );
}
