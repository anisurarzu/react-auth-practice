export const apiRequest = async (url, method, data = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};
