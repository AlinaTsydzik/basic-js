const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsObject = {};

  domains.forEach(domain => {
    let domainReversed = domain.split('.').reverse();
    let str = '';
    for (let i=0; i < domainReversed.length; i++) {
      str += '.' + domainReversed[i];
      if(Object.hasOwn(domainsObject, `${str}`)){
        domainsObject[str]++;
      }
      else domainsObject[str] = 1;
    }
  })
  return domainsObject;
}

module.exports = {
  getDNSStats
};
