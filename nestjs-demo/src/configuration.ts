import { readFileSync } from 'fs'
import { join } from 'path'
import * as yaml from 'js-yaml'
import * as process from 'node:process'
import * as _ from 'lodash'

const YAML_COMMON_CONFIG_FILENAME = 'config.yml'

const filePath = join(__dirname, '../config', YAML_COMMON_CONFIG_FILENAME)

const envPath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || 'development'}.yml`
)

const fileContents = readFileSync(filePath, 'utf8')
const commonConfig = yaml.load(fileContents)

const envContents = readFileSync(envPath, 'utf8')
const envConfig = yaml.load(envContents)

export default () => {
  return _.merge(commonConfig, envConfig)
}
