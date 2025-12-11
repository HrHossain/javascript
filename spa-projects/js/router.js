const routes = {
    "/" : HomePage,
    "/product":ProductPage,
    "/about":AboutPage
}

function router(e){
    console.log(e)
    const hash = window.location.hash.slice(1) || "/";
    const page = routes[hash];
    console.log(hash)
    document.getElementById("app").innerHTML = page ? page():"<h1>404 - Page Not Found</h1>";
}

window.addEventListener('load',router);
window.addEventListener('hashchange',router);