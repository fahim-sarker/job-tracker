import type { ErrorRequestHandler } from 'express';
import { AppError } from '../utils/app-error.js';

const BODY_ERRORS: Record<string, { status: number; code: string; message: string }> = {
  'entity.parse.failed': {
    status: 400,
    code: 'INVALID_JSON',
    message: 'Invalid JSON in request body',
  },
  'entity.too.large': {
    status: 413,
    code: 'PAYLOAD_TOO_LARGE',
    message: 'Request body is too large',
  },
};

function getBodyError(err: unknown) {
  if (typeof err === 'object' && err !== null && 'type' in err) {
    return typeof err.type === 'string' ? BODY_ERRORS[err.type] : undefined;
  }
  return undefined;
}

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: { code: err.code, message: err.message } });
    return;
  }

  const bodyError = getBodyError(err);
  if (bodyError) {
    res
      .status(bodyError.status)
      .json({ error: { code: bodyError.code, message: bodyError.message } });
    return;
  }

  console.error(err);
  res
    .status(500)
    .json({ error: { code: 'INTERNAL_ERROR', message: 'Something went wrong' } });
};
