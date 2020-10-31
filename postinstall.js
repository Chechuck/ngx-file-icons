const fs = require('fs');
const path = require('path');

const libFolder = path.resolve(__dirname, 'projects/ngx-file-icons/src/lib');
const distFolder = path.resolve(__dirname, 'node_modules/file-icon-vectors/dist');

function cloneIcons() {
  const libIconsFolder = path.resolve(libFolder, 'icons');
  const distIconsFolder = path.resolve(distFolder, 'icons');
  fs
    .readdirSync(distIconsFolder)
    .map(set => {
      const libIconSetFolder = path.resolve(libIconsFolder, set);
      const distIconSetFolder = path.resolve(distIconsFolder, set);
      fs.readdirSync(distIconSetFolder)
        .filter(icon => {
          const ext = icon.split('.').pop();
          return ext === 'svg';
        })
        .map(icon => {
          const iconLibIconSetFolder = path.resolve(libIconSetFolder, icon);
          const iconDistIconSetFolder = path.resolve(distIconSetFolder, icon);
          fs.copyFileSync(iconDistIconSetFolder, iconLibIconSetFolder);
        });
    });
}

function cloneCss() {
  const libCssFile = path.resolve(libFolder, 'icon.component.css');
  const distCssFile = path.resolve(distFolder, 'file-icon-vectors.min.css');
  fs.copyFileSync(distCssFile, libCssFile);
}

function cloneCatalog() {
  const catalogs = {};
  const distIconsFolder = path.resolve(distFolder, 'icons');
  const libCatalogFile = path.resolve(libFolder, 'icons', 'catalog.json');
  fs
    .readdirSync(distIconsFolder)
    .map(set => {
      const catalogIconSetFile = path.resolve(distIconsFolder, set, 'catalog.json');
      const catalog = require(catalogIconSetFile);
      catalogs[set] = catalog;
    });
  const json = JSON.stringify(catalogs);
  fs.writeFileSync(libCatalogFile, json, { encoding: 'utf-8' });
}

cloneCss();
cloneIcons();
cloneCatalog();
