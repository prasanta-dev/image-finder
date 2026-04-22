
export const getData = async (query) => {
  const apiKey = 'hI26yw9pdh52tSuQniBk5OmS4edMe288wv221SJzdJE';
  const endpoint = `https://api.unsplash.com/photos/random?query=${query}&count=30&client_id=${apiKey}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const normalizedData = Array.isArray(data) ? data : [data];
    const apidata = normalizedData.map((val) => ({
      id: val.id,
      title: val.alt_description,
      url: val.urls.regular
    }));
    return apidata;
  } catch (error) {
    console.log(error.massage)
  }
}
