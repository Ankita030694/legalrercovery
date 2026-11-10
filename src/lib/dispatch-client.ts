const postBatch = async (payload: Record<string, unknown>) => {
  const res = await fetch("/api/notice-dispatch/send-batch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return { ok: res.ok, status: res.status, data: await res.json().catch(() => ({})) };
};

/** Sends a dispatch batch, asking the admin first if every selected notice was already sent. */
export async function postDispatchBatch(payload: Record<string, unknown>) {
  const result = await postBatch(payload);
  if (result.status === 409 && result.data?.requiresResendConfirmation && window.confirm(`${result.data.error}\n\nSend again anyway?`)) {
    return postBatch({ ...payload, allowResend: true });
  }
  return result;
}
