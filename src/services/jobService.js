const API_URL = "https://jsearch.p.rapidapi.com/search";

const fetchJobs = async (jobTitle, city, country, filters, job_id) => {
  const params = new URLSearchParams({
    query: `${jobTitle} in ${city}, ${country}`,
    page: "1",
    num_pages: "1",
    filters: filters,
    job_id,
  });

  const headers = {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_SECRET_KEY,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  try {
    const response = await fetch(`${API_URL}?${params}`, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.error("Error response from server:", response.status, data);
      throw new Error(`Server error: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export { fetchJobs };
