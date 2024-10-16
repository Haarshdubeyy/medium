export const fetchCats = async (page = 1, limit = 5) => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Desc`;
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Failed to fetch cats');
    }
  
    return await response.json();
  };
  