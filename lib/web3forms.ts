export async function submitToWeb3Forms(data: Record<string, unknown>): Promise<{ success: boolean; message?: string }> {
  const response = await fetch("/api/web3forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: result.message || "Failed to submit form",
    };
  }

  return {
    success: result.success ?? true,
    message: result.message,
  };
}
