import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Taşımacılık',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Yükü olan kimselerin her türlü taşımacılık ihtiyacı için güncel ilan ekliyebildiği, yük taşıyan kimselerin ise araçlarına göre en uygun yükleri bulabildiği teknolojik lojistik platformudur.
      </>
    ),
  },
  {
    title: 'Kolay Yönetim',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Yükgetir; lojistik yönetimini dijitalleştir, tüm nakliye süreçlerinin akıllı telefonlarla kontrol edilip yönetilmesini sağlar.
      </>
    ),
  },
  {
    title: 'Kiralama',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Yükünüz var ilan verebilirsiniz. Türkiye genelinde ilan yayını yaparak yükünüzü yük taşıyana sunabilirsiniz.
        Bu çerçevede Yükgetir tüm lojistik operasyonlarını teknoloji ortamında bir araya getiren dijital bir oluşumdur
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
