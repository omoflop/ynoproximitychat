import { build } from 'esbuild';
const banner =  `
// ==UserScript==
// @name         YnoProject Proximity Voice Chat
// @namespace    https://github.com/omoflop
// @version      ${new Date().toISOString().split('T')[0]}
// @description  Proximity-based voice chat for ynoproject
// @author       omoflop
// @match        https://ynoproject.net/*
// @grant        none
// ==/UserScript==
`.trim();

build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/voicechat.user.js',
  target: 'esnext',
  format: 'iife',
  platform: 'browser',
  banner: { js: banner },
  tsconfig: 'tsconfig.json',
  treeShaking: true
});