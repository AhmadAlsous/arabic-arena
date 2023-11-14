export function replaceSpacesWithDashes(str) {
  return str.replace(/ /g, '-');
}

export function replaceDashesWithSpaces(str) {
  return str.replace(/-/g, ' ');
}

export function replaceNewLinesWithBreaks(str) {
  return str.replace(/\n/g, '<br>');
}

export function constructEmbedUrl(url) {
  let videoId = url.split('/').pop();
  if (isEdpuzzle(url)) {
    return `https://edpuzzle.com/embed/media/${videoId}`;
  }
  if (url.includes('youtube.com')) videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
}

export function isEdpuzzle(url) {
  return url.includes('edpuzzle.com');
}
