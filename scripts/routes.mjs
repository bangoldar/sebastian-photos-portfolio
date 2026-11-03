import {mkdir,copyFile} from 'node:fs/promises';
const routes=['work','work/soccer','work/basketball','work/creative','work/hockey','packages','packages/single','packages/group','packages/addons','contact'];
for(const route of routes){await mkdir(`dist/${route}`,{recursive:true});await copyFile('dist/index.html',`dist/${route}/index.html`)}
console.log(`Prepared ${routes.length} direct page routes.`);
