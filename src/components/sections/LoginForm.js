import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';
import { Login, QrCodeLogin } from '../../services/api/login';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';
import { GetAuthentication } from '../../services/localStorage/LocalStorageService';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { uuid } from 'uuidv4';
import toast from '../alert';

const outerClasses = classNames(
  'hero section center-content'
);

const innerClasses = classNames(
  'hero-inner section-inner'
);

const loginStage = [
  { id: 0, value: "" },
  { id: 1, value: "." },
  { id: 2, value: ". ." },
  { id: 3, value: ". . ." },
]

const LoginForm = () => {
  const [loading, setLoading] = useState(loginStage[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);
  const [hideFormLogin, setHideFormLogin] = useState(false);
  const [browserToken, setBrowserToken] = useState(uuid());
  const [iframeSrc, setIframeSrc] = useState('');

  const history = useHistory();

  useEffect(() => {
    const token = GetAuthentication();
    if (token) {
      history.push("/home");
    }
  }, [])

  useEffect(() => {
    setIframeSrc(`http://localhost:3000/qrcode/1/${browserToken}`)
  }, [browserToken])

  useEffect(() => {
    if (showQrCodeModal) {
      setTimeout(() => {
        if (showQrCodeModal) {
          setShowQrCodeModal(false);
          setHideFormLogin(true);
        }
      }, 10000)
    }
  }, [showQrCodeModal])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        let index = (loading.id + 1) % 4;
        setLoading(loginStage[index]);
      }, 250);
    } else if (loading.id !== 0) {
      setLoading(loginStage[0]);
    }
  }, [loading, isLoading])

  async function HandleSubmit(data) {
    setIsLoading(true);

    if (hideFormLogin) {
      let result = await QrCodeLogin(data.platformId, data.browserToken);
      if (result) {
        history.push("/home");
      } else {
        setHideFormLogin(false);
      }
    } else {
      let result = await Login(data.email, data.senha);
      if (result) {
        history.push("/home");
      }
    }

    setIsLoading(false);
  }

  return (
    <section
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom" data-reveal-delay="200">
            <h1 className="mt-0 mb-16">
              Login
            </h1>
            <br />
            <br />
            <Form onSubmit={HandleSubmit}>
              {
                !hideFormLogin ? (
                  <>
                    <Input name="email" id="email" background-image="'./../../../assets/images/User.png" type="email" placeholder="Usuário" className="" />
                    <div className="container-xs mt-32">
                    </div>
                    <Input name="senha" id="senha" type="password" placeholder="Senha" className="" />
                  </>
                ) : (
                  <>
                    <Input name="platformId" id="platformId" value="1" hidden />
                    <Input name="browserToken" id="platformId" value={browserToken} hidden />
                  </>
                )

              }
              <div className="mt-32" >
                <Button type="submit" className="button button-primary button-wide-mobile" style={{ width: 160 }} disabled={isLoading}>
                  {
                    'Login ' + loading.value
                  }
                </Button>
                {
                  hideFormLogin ? (
                    <Button tag="a" onClick={() => setHideFormLogin(false)} color="dark" style={{ width: 160, marginLeft: 50 }} disabled={isLoading}>
                      Cancelar
                    </Button>
                  ) : (
                    <Button tag="a" onClick={() => setShowQrCodeModal(true)} className="button button-primary button-wide-mobile" style={{ width: 160, marginLeft: 50 }} disabled={isLoading}>
                      Login por QRCODE
                    </Button>
                  )
                }
              </div>
            </Form>
            <br />
            <div className="container-xs">
              <a className="m-0 mb-32 mt-32" href="recover">
                Esqueceu sua senha?
              </a>
            </div>
            <div className="mt-32" >
              <Button tag="a" color="dark" wideMobile href="register">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={showQrCodeModal}
        onClose={() => setShowQrCodeModal(false)}
      >
        <DialogTitle onClose={() => setShowQrCodeModal(false)}>
          <h4 style={{ color: '#6163FF', textAlign: 'center' }}>Login via QRCODE</h4>
        </DialogTitle>
        <DialogContent style={{ width: 550, height: 550, overflow: 'hidden', }} >
          <iframe src={iframeSrc} style={{ width: 500, height: 500, overflow: 'hidden' }} />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default LoginForm;