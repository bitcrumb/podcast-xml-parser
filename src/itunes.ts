/**
 * Fetches podcast information from iTunes based on the provided podcast ID.
 *
 * @param {number} id - The podcast ID for iTunes search.
 * @returns {Promise<any | undefined>} The search results for the podcast from iTunes or undefined on error.
 */
export async function itunesLookup(id: number): Promise<any | undefined> {
  const itunesResponse = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=podcast`);
  const itunesData = await itunesResponse.json();
  return itunesData.results[0];
}