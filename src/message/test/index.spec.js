import { expect } from 'chai';
import TmMessage from '../index';

describe('tmMessage', () => {
  afterEach(() => {
    const el = document.querySelector('.tm-message');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('automatically close', done => {
    TmMessage({
      message: '灰风',
      duration: 500
    });
    const message = document.querySelector('.tm-message__content');
    expect(document.querySelector('.tm-message')).to.exist;
    expect(message.textContent).to.equal('灰风');
    setTimeout(() => {
      expect(document.querySelector('.tm-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('custom icon', done => {
    TmMessage({
      message: '夏天',
      iconClass: 'tm-icon-fangda'
    });
    setTimeout(() => {
      const icon = document.querySelector('.tm-message i');
      expect(icon.classList.contains('tm-icon-fangda')).to.true;
      done();
    }, 500);
  });

  it('close all', done => {
    TmMessage({
      message: '夏天',
      duration: 0
    });
    TmMessage({
      message: '淑女',
      duration: 0
    });
    setTimeout(() => {
      TmMessage.closeAll();
      setTimeout(() => {
        expect(document.querySelector('.tm-message')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });

  it('create', () => {
    TmMessage('娜梅莉亚');
    expect(document.querySelector('.tm-message')).to.exist;
  });

  it('invoke with type', () => {
    TmMessage.success('毛毛狗');
    expect(document.querySelector('.tm-message').__vue__.type).to.equal('success');
  });
})
  