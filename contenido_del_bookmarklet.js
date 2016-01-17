//Este código debe ir minificado y dentro de una función anónima dentro del marcador de una página web.
// URL del bookmark: javascript:(function(){AQUÍ VA EL CÓDIGO MINIFICADO DE ESTE ARCHIVO})();

if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
    script.onload=releasetheKraken;
    document.body.appendChild(script);
} 
else {
    releasetheKraken();
}
 
function releasetheKraken() {
    var bb = document.createElement('link');
    bb.type = 'text/css';
    bb.href = 'https://alojamiento/bunga.min.css';
    bb.rel = 'stylesheet'
    document.body.appendChild(bb);
 
    var aa = document.createElement('script');
    aa.src = 'https://alojamiento/sofos_tooltip.min.js';
    document.body.appendChild(aa);
}
