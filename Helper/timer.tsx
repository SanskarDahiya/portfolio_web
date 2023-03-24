import * as workerTimer from 'worker-timers'
export * from 'worker-timers'

export const wait = (time: number) => {
  return new Promise((res) => workerTimer.setTimeout(res, Number(time) || 0))
}
