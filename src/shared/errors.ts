/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-classes-per-file */
export const ErrorCodes = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_ERROR: 500,
};

export class HttpError extends Error {
  public errors: any;

  public isHttpError: boolean;

  public httpError: string;

  constructor(message: string, errors: any) {
    super(message);
    this.errors = errors;
    this.isHttpError = true;
    this.httpError = 'HttpError';
  }
}

export class HttpUnauthorizedError extends HttpError {
  constructor(message: string, errors: any) {
    super(message, errors);
    this.httpError = 'HttpUnauthorizedError';
  }
}

export class HttpNotFoundError extends HttpError {
  constructor(message: string, errors: any) {
    super(message, errors);
    this.httpError = 'HttpNotFoundError';
  }
}

export class HttpUnprocessableEntityError extends HttpError {
  constructor(message: string, errors: any) {
    super(message, errors);
    this.httpError = 'HttpUnprocessableEntityError';
  }
}

export class HttpInternalError extends HttpError {
  constructor(message: string, errors: any) {
    super(message, errors);
    this.httpError = 'HttpInternalError';
  }
}

export const parseServerErrors = (e?: any): { [id: string]: string } => {
  const result: { [id: string]: string } = {};
  if (e?.response?.data?.errors) {
    e = e.response.data;
  }
  if (e?.errors) {
    for (const err of e.errors) {
      if (err.field && err.details) {
        result[err.field] = err.details.error;
      }
    }
  }
  return result;
};
