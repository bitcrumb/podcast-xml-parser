import { DOMParser, XMLSerializer } from "xmldom";

import { type Config } from "./types";
import { itunesLookup } from "./itunes";

const parser = new DOMParser();

/**
 * Preprocesses an XML string to handle possible XML inconsistencies.
 * Wraps content in a root tag if it doesn't start with one.
 *
 * @param {string} xmlString - The XML string to preprocess.
 * @returns {string} The preprocessed XML string.
 * @throws {Error} Throws an error if the XML feed is empty.
 */
export function preprocessXml(xmlString: string): string {
  // Check if source is a valid XML string
  if (xmlString.trim() === "") {
    throw new Error("Empty XML feed. Please provide valid XML content.");
  }
  const wrappedString = xmlString.startsWith("<") ? xmlString : `<root>${xmlString}</root>`;
  const doc = parser.parseFromString(wrappedString, "text/xml");
  return new XMLSerializer().serializeToString(doc);
}

/**
 * Retrieves XML content from a given URL using the Fetch API.
 * Supports optional byte range requests.
 *
 * @param {string} url - The URL from which to fetch the XML content.
 * @param {Config} config - Configuration options for the request, like request size.
 * @returns {Promise<string>} Resolves to the XML content as a string.
 * @throws {Error} Throws an error if there's an issue fetching the XML content.
 */
async function fetchXmlFromUrl(url: string, config: Config): Promise<string> {
  try {
    const headers =
      typeof config.requestSize === "number" && config.requestSize > 0
        ? { Range: `bytes=0-${config.requestSize}` }
        : undefined;
    const response = await fetch(url, { headers });
    let partialFeed = await response.text();

    // Find the last complete <item>...</item> tag
    const lastCompleteItem = partialFeed.lastIndexOf("</item>");
    if (lastCompleteItem !== -1) {
      // Cut off anything after the last complete item
      partialFeed = partialFeed.substring(0, lastCompleteItem + "</item>".length);
    }

    return partialFeed + "</channel></rss>"; // Close the RSS feed to parse data
  } catch (error) {
    throw Error("Error fetching from feed: " + url);
  }
}

/**
 * Retrieves XML content from a given source, which can be a URL, iTunes ID, or an XML string.
 *
 * @param {string | URL | number} source - The source of the XML content, can be a URL object, an iTunes ID, or an XML string.
 * @param {Config} config - Configuration options for the request, like request size.
 * @returns {Promise<{ itunes?: any; xmlString: string }>} Object containing iTunes data (if relevant) and the XML string.
 * @throws {Error} Throws an error if the source type is invalid or if unable to fetch associated feed URL with the given iTunes ID.
 */
export async function retrieveXmlFromSource(
  source: string | URL | number,
  config: Config,
): Promise<{ itunes?: any; xmlString: string }> {
  if (source instanceof URL) {
    // Fetch the XML string from a URL
    const xmlString = await fetchXmlFromUrl(source.toString(), config);

    return { xmlString };
  } else if (typeof source === "number") {
    // Fetch the iTunes information for the provided ID
    const itunes = await itunesLookup(source);

    if (typeof itunes?.feedUrl === "string") {
      // Fetch the XML string from the iTunes feed URL
      const xmlString = await fetchXmlFromUrl(itunes.feedUrl, config);
      return { itunes, xmlString };
    }

    // If iTunes ID is invalid or unable to fetch associated feed URL, throw an error
    throw new Error("Invalid iTunes ID or unable to fetch associated feed URL.");
  } else if (typeof source === "string") {
    // If source is already an XML string, return it directly
    return { xmlString: source };
  } else {
    // If the source type is none of the above, throw an error
    throw new Error("Invalid source type. Please provide a valid URL, iTunes ID, or XML string.");
  }
}

/**
 * Parses the given XML string into a Document object.
 *
 * @param preprocessedXml - The preprocessed XML string to be parsed.
 * @returns {Document} The parsed Document object.
 */
export function parse(preprocessedXml: string): Document {
  return parser.parseFromString(preprocessedXml, "text/xml");
}
