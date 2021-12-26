export const Fetch = (url: string, requestOptions: object) => (fetch(url, requestOptions)

  .then(response => {
    if (response.ok) {
      return response.json();
    }
    return false;
  })
  .then(json => json)
  .catch(() => false)
);
