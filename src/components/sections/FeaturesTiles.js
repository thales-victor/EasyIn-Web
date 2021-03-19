import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner pt-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap center-content',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'O que fazemos',
      paragraph: `Possibilitamos o login automático em sites e aplicativos sem a 
      necessidade de digitar senhas no computador ou em seu smartphone, tornando o processo de autenticação rápido e 
      seguro, principalmente em equipamentos públicos.`
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" data-reveal-delay="200" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/lock_open.svg')}
                        alt="Features tile icon 02"
                        width={64}
                        height={64}
                        className="svgimage" />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Autenticações Automáticas
                    </h4>
                    <p className="m-0 text-sm">
                      Realize autenticações sem precisar lembrar ou digitar suas senhas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/key.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                        className="svgimage"/>
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Gerenciamento de senhas
                    </h4>
                    <p className="m-0 text-sm">
                      Todas suas senhas em um só lugar
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/noextension.svg')}
                        alt="Features tile icon 04"
                        width={64}
                        height={64}
                        className="svgimage" />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Sem extensões
                    </h4>
                    <p className="m-0 text-sm">
                      Somente o app! Não há necessidade de instalar extensões ou programas externos
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/qrcode.svg')}
                        alt="Features tile icon 05"
                        width={64}
                        height={64}
                        className="svgimage" />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Logins por QR Code
                    </h4>
                    <p className="m-0 text-sm">
                      Não está em seu computador? Evite digitar suas senhas em dispositivos públicos e agilize suas autenticações utilizando a leitura de QR Code
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/lock.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64}
                        className="svgimage" />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Gerador de senhas seguras
                    </h4>
                    <p className="m-0 text-sm">
                      Utilize senhas complexas e diferentes em cada plataforma
                    </p>
                  </div>
                </div>
              </div>              

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;