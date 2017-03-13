// ==UserScript==
// @name        wp
// @namespace   esh
// @description wp cleaner
// @include     *.facebook.com*
// @version     0.1
// ==/UserScript==

const removeScrolls = () => {document.body.style.overflow = "hidden";};

const tweakCss = () =>
{
  let rule = '';
  rule += '.img {max-width: 80px !important; max-height: 80px !important}';
  rule += '.__i_ {font-size: 12px !important}';
  rule += '._hh7 {padding: 2px 4px !important}';

  const css = document.createElement('style');

  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};

window.onload = tweakCss;
removeScrolls();