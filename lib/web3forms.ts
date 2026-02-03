/**
 * Submit form data to Web3Forms.
 * Must be called from the client - Web3Forms blocks server-side requests on the free plan (403).
 * Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env file.
 */
export async function submitToWeb3Forms(data: Record<string, unknown>): Promise<{ success: boolean; message?: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message: "Form is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment.",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...data,
      botcheck: "", // Spam protection - empty when using JS submission
    }),
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
