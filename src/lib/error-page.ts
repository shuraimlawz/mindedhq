// Error page utilities
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Application Error - Minded Technologies</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { background: #171717; border: 1px solid #262626; padding: 2rem; border-radius: 12px; max-width: 480px; text-align: center; }
    h1 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    p { color: #a3a3a3; font-size: 0.875rem; margin-bottom: 1.5rem; }
    a { color: #fff; background: #262626; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-size: 0.875rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Something went wrong</h1>
    <p>An internal error occurred. Please refresh the page or try again later.</p>
    <a href="/">Return Home</a>
  </div>
</body>
</html>`;
}
