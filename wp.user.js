// ==UserScript==
// @name        wp
// @namespace   esh
// @description wp cleaner
// @include     *dyninno.facebook.com/chat*
// @version     0.2
// ==/UserScript==

const removeScrolls = () => {document.body.style.overflow = "hidden";};

const tweakCss = () =>
{
  let rule = '';
  // inline image
  rule += '.img {max-width: 80px !important; max-height: 80px !important}';
  rule += '._52mr {max-width: 100% !important}'; // own message
  rule += '.__i_ {font-size: 12px !important}'; // font size
  rule += '._hh7 {padding: 2px 4px !important}'; // text density
  rule += '._2poz {display: none !important}'; // inline link preview

  const css = document.createElement('style');

  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};

window.onload = tweakCss;
removeScrolls();