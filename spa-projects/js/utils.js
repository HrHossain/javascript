export function parseParams() {
    const hash = window.location.hash.split("?");
    const queryString = hash[1] || "";
    const params = new URLSearchParams(queryString);

    return Object.fromEntries(params.entries());
}
