// 封装精确的获取数据类型
export function getType(source) {
  return Object.prototype.toString.call(source).slice(8, -1)
}

// 深拷贝
export function deepCopy(source) {
  let res = null
  if (getType(source) === 'Array') {
    res = []
  } else if (getType(source) === 'Object') {
    res = {}
  } else {
    return source
  }

  // 2.循环赋值
  for (const key in source) {
    if (getType(source[key]) === 'Array' || 'Object') {
      // 如果要复制的值还是一个数组，或者是一个对象，直接等于就还是一个浅拷贝，
      res[key] = deepCopy(source[key]) // 如果数组赋值还是一个对象
    } else {
      res[key] = source[key]
    }
  }
  return res
}

/**
 * @format yyyy-MM-dd hh:mm:ss
 * @param {String} format
 * @param {Date} date
 * @returns 2022-01-01 12:00:00
 */
export function dateFormat(format, date = new Date()) {
  var args = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var i in args) {
    var n = args[i]
    if (new RegExp('(' + i + ')').test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ('00' + n).substr(('' + n).length))
  }
  return format
}

/**
 * 保留*位小数不四舍五入
 * @param {Number, String} num
 * @param {Number} decimal
 * @returns
 */
export function formatDecimal(num, decimal = 2) {
  num = num.toString()
  let index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  return parseFloat(num)
}

// 获取地址上的url参数
export function getUrlParams() {
  const data = window.location.href
  const val = {}
  if (data.indexOf('?') !== -1) {
    const allParamsArr = data.split('?')[1].split('&')
    if (allParamsArr.length !== 0) {
      for (let i = 0; i < allParamsArr.length; i++) {
        val[allParamsArr[i].split('=')[0]] = allParamsArr[i].split('=')[1]
      }
      return val
    }
  }
}

// 获取地址上的url参数 存到sessionStorage
export function setUrlParamsStorage() {
  const data = window.location.href
  if (data.indexOf('?') !== -1) {
    const allParamsArr = data.split('?')[1].split('&')
    if (allParamsArr.length !== 0) {
      for (let i = 0; i < allParamsArr.length; i++) {
        sessionStorage.setItem(allParamsArr[i].split('=')[0], allParamsArr[i].split('=')[1])
      }
    }
  }
}

// 对象转url参数
export function convertObj(data) {
  const _result = [];
  for (const key in data) {
    const value = data[key];
    if (value.constructor == Array) {
      value.forEach(function (_value) {
        _result.push(key + "=" + _value);
      });
    } else {
      _result.push(key + '=' + value);
    }
  }
  return _result.join('&');
}