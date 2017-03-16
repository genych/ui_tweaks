// ==UserScript==
// @name        wp
// @namespace   esh
// @description wp cleaner
// @include     *dyninno.facebook.com/chat*
// @grant none
// @version     0.4
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

  // left col
  // todo: scale image as well
  rule += '._1enh {flex-basis: 1px !important; min-width: 42px !important}';
  rule += '._4ld-, ._4ldz, ._55lt- {width: 20px !important; height: 20px !important}';
  rule += '._1ht6 {font-size: 11px !important}';
  rule += '._1htf {font-size: 9px !important}';

  const css = document.createElement('style');

  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};

window.onload = tweakCss;
removeScrolls();