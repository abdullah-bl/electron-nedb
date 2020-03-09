'use strict';


const electron = require('electron')
const DataStore = require('nedb-promises')

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

const isDev = isEnvSet ? getFromEnv : !app.isPackaged;

const Collection = (filename, options) =>
  DataStore.create(Object.assign({
    filename: `${isDev ? `db/${filename}-dev.db` : `${app.getPath('userData')}/data/db/${filename}.db`}`,
    autoload: true,
    timestampData: true
  }, options))

module.exports = Collection
