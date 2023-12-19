export const fetchLessons = async () => {
  try {
    const response = await fetch(
      'https://arabicarena.azurewebsites.net/Lessons'
    );
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
