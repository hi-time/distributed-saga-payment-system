type Status = 400 | 401 | 404 | 500 | 503;

export class HttpError extends Error {
  constructor(e?: string, public readonly status: Status = 503) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

type Code = 'abort' | 'retry';
export class ServiceError extends Error {
  constructor(e?: string, public readonly code: Code = 'abort') {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
