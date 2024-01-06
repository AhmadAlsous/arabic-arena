export function replaceSpacesWithDashes(str) {
  return str.replace(/ /g, '-');
}

export function replaceDashesWithSpaces(str) {
  return str.replace(/-/g, ' ');
}

export function replaceNewLinesWithBreaks(str) {
  return str.replace(/\n/g, '<br>');
}

export function formatTime(time) {
  if (time < 10) return `0${time}`;
  else return time;
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

export function getQuizActive(url) {
  return (
    url.includes(`/quiz/`) &&
    !url.includes('/results') &&
    !url.includes('/review')
  );
}

export function getPlacementActive(url) {
  return (
    url.includes(`/placement/test`) &&
    !url.includes('/results') &&
    !url.includes('/review')
  );
}

export function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function getFirstName(name) {
  return formatName(name.split(' ')[0]);
}

export function getLastName(name) {
  const splitName = name.split(' ');
  return formatName(splitName[splitName.length - 1]);
}
