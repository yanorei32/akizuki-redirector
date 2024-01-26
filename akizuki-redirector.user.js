// ==UserScript==
// @name         Akizuki Redirector
// @namespace    https://github.com/yanorei32/akizuki-redirector
// @version      0.1.3
// @description  新しいURLにリダイレクトします。たぶん。
// @author       yanorei32
// @match        https://akizukidenshi.com/catalog/g/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=akizukidenshi.com
// @updateURL    https://github.com/yanorei32/akizuki-redirector/raw/master/akizuki-redirector.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const url_parts = location.href.split('/');
    const old_id_candidates = url_parts.filter(v => v.includes('-'));
    if (old_id_candidates.length != 1) return;
    const old_id = old_id_candidates[0];
    const numeric_part = old_id.split('-')[1];
    location.href = `/catalog/g/g1${numeric_part}`;
})();
