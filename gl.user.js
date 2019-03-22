'use strict';

// ==UserScript==
// @name        gl_tweaks
// @namespace   esh
// @description I wanna ligatures
// @include     *gitlab*
// @grant none
// @version     0.1
// ==/UserScript==

const tweakCss = () =>
{
  const rule = '.diff-file .diff-content table .line_holder td{font-family: "Fira Code" !important; font-size: 100% !important; font-size: 13px !important;}';
  const css = document.createElement('style');

  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};

window.onload = tweakCss;
