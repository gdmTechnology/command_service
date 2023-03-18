export class DeviceNotFoundError extends Error {
  constructor() {
    super('This device was not found')
    this.name = 'DeviceNotFoundError'
  }
}
