export function assertTruthy<T, M extends { code: number; error: string }>(
  value: T,
  message: M
): asserts value {
  if (!value) {
    const { code, error } = message;
    const errorMessage = `${error}`;
    throw new Error(
      JSON.stringify({
        code: code ?? 500,
        error: errorMessage ?? "Internal Server Error",
      })
    );
  }
}
