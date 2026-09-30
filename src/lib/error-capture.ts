// Error capture utility
let lastCapturedError: unknown = null;

export function captureError(error: unknown, context?: string) {
  lastCapturedError = error;
  console.error(`[Minded Error]${context ? ` [${context}]` : ''}:`, error);
}

export function consumeLastCapturedError(): unknown {
  const err = lastCapturedError;
  lastCapturedError = null;
  return err;
}
