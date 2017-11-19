const convert = require('yaml-to-messageformat')
const loaderUtils = require('loader-utils')
const MessageFormat = require('messageformat')

module.exports = function (input) {
  const options = loaderUtils.getOptions(this)
  const { locales, translations } = convert(input, options)
  const mf = new MessageFormat(locales)
  if (options.biDiSupport) mf.setBiDiSupport()
  return mf.compile(translations).toString('module.exports')
}
