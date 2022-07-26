import type { CssStyleObject, RuneCompConfig } from '../types/rune'

export const OUTBOUND_RE = /^[a-z]+:/i

/**
 * 判断是否为外链
 */
export function isExternal(path: string): boolean {
  return OUTBOUND_RE.test(path)
}

/**
 * 防抖
 */
export function debounce(fn: () => void, delay = 300) {
  let timer: any = 0
  return function _() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null), delay)
  }
}

/**
 * 节流
 */
export function throttle(fn: () => void, delay = 300) {
  let timer: any = 0
  return function _() {
    if (!timer) {
      timer = setTimeout(() => fn.apply(null), delay)
    }
  }
}

/**
 * 获取相对时间
 */
export function getRelativeTime(d1: number, d2 = +new Date()) {
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }

  const rtf = new Intl.RelativeTimeFormat('ch', { numeric: 'auto' })

  const elapsed = d1 - d2

  for (const u in units) {
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u === 'second')
      return rtf.format(Math.round(elapsed / units[u as keyof typeof units]), u as Intl.RelativeTimeFormatUnit)
  }

  return 'Unknown time'
}

// 设置传输对象
export function setTransferData<T extends RuneCompConfig>(transfer: DataTransfer, data: T): void {
  Object.entries(data).forEach(([key, value]) => {
    transfer.setData(key, value)
  })
}

// 设置样式
export function setStyle(target: HTMLElement, styles: CssStyleObject) {
  let cssResult = ''
  Object.entries(styles).forEach(([key, value]) => {
    cssResult += `${key.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`)}: ${value};`
  })
  target.setAttribute('style', cssResult)
}
