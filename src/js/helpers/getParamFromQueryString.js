export function getParamFromQueryString(paramName) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const paramValue = urlSearchParams.get(paramName);

  if (paramValue === null) {
    return undefined;
  }

  return paramValue;
}
