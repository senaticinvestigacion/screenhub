import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="badge--corporate margin-bottom--md">PROYECTO: SCREENHUB</div>
        <Heading as="h1" className="hero__title" style={{fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2'}}>
          Sistema Administrado de Contenidos <br /> para Pantallas SENA
        </Heading>
        <p className="hero__subtitle" style={{fontSize: '1.5rem', opacity: '0.9', fontWeight: '400'}}>
          Autonomía comunicacional, IA Generativa y Monitoreo IoT por centro de formación.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Ver Documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Gestión de Información`}
      description="Centro de documentación para el proyecto ScreenHub - Desarrollo Técnico y Gestión.">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center margin-bottom--xl">
              <span className="badge badge--success margin-bottom--md">Estado: En Desarrollo - Fase 1</span>
              <Heading as="h2">Ecosistema de Comunicación Inteligente</Heading>
              <p className="padding-horiz--md">
                <strong>ScreenHub</strong> centraliza la gestión de contenidos y el monitoreo ambiental 
                mediante una arquitectura descentralizada diseñada específicamente para la infraestructura del SENA. 
                Utilizamos <strong>IA Generativa</strong> y <strong>sensores IoT</strong> para transformar las pantallas de formación en centros de información activos y eficientes.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="enterprise-card">
                <div className="card-icon margin-bottom--md">
                  <img src={useBaseUrl('/img/icon_project_v2.png')} alt="Proyecto" style={{width: '140px', height: '140px', objectFit: 'contain'}} />
                </div>
                <Heading as="h3">El Proyecto</Heading>
                <p>Estrategia, objetivos y alineación con el Plan Nacional de Desarrollo e institucional del SENA.</p>
                <Link className="button button--link button--primary" to="/docs/proyecto/introduccion">Explorar Proyecto →</Link>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="enterprise-card">
                <div className="card-icon margin-bottom--md">
                  <img src={useBaseUrl('/img/icon_tech_v2.png')} alt="Técnica" style={{width: '140px', height: '140px', objectFit: 'contain'}} />
                </div>
                <Heading as="h3">Solución Técnica</Heading>
                <p>Arquitectura Full Stack, MiniPCs, despliegue IoT y asistencia inteligente con Google Gemini.</p>
                <Link className="button button--link button--primary" to="/docs/solucion-tecnica/arquitectura">Ver Técnica →</Link>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="enterprise-card">
                <div className="card-icon margin-bottom--md">
                  <img src={useBaseUrl('/img/icon_progress_v2.png')} alt="Avance" style={{width: '140px', height: '140px', objectFit: 'contain'}} />
                </div>
                <Heading as="h3">Avance Mensual</Heading>
                <p>Seguimiento detallado de hitos y bitácoras de desarrollo estratégico 2026.</p>
                <Link className="button button--link button--primary" to="/docs/avance-del-proyecto/bitacora-mensual/2026-04-abril">Ver Bitácora →</Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container margin-vert--lg padding-vert--lg text--center" style={{borderTop: '1px solid var(--ifm-color-emphasis-200)'}}>
           <p style={{fontStyle: 'italic', color: 'var(--ifm-color-content-secondary)'}}>
             "Transformando la comunicación institucional a través de la innovación tecnológica descentralizada."
           </p>
           <div className="avatar avatar--vertical margin-top--md">
             <div className="avatar__intro">
               <div className="avatar__name">CTMA - Centro de Tecnología de la Manufactura Avanzada</div>
               <small className="avatar__subtitle">Regional Antioquia | SENA</small>
             </div>
           </div>
        </section>
      </main>
    </Layout>
  );
}
