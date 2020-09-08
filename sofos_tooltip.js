// Archivo transformado a JS desde ela rchivo coffee utilizando decaffeinate

/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

const jj = jQuery.noConflict();
const defaultExport = {};
const root = typeof defaultExport !== 'undefined' && defaultExport !== null ? defaultExport : defaultExport;
export default defaultExport;
jj(function() {
  // Ésta es la función ligada al evento 'onclick' de las palabras marcadas
  root.mongui = function(xx) {
    jj('.tultipo.' + xx + '').slideToggle("200");
    return jj('.concepto.' + xx + '').toggleClass("inversion");
  };

  // Cadena escapada para poder utilizarla en un objecto RegEx
  const escapada = cadena => cadena.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  // La función sobre el json parseado (pjson) empieza aquí
  const primera = function(pjson) {
    let dirAutor, dirPost, nomAutor;
    let contador = 0;

    // La estructura html es diferente según el estilo que se use del foro
    if (jj("head").children("link[href*='subsilver2']").length > 0) {
      dirAutor = jj(".postauthor");
      nomAutor = dirAutor;
      dirPost = aa => aa.closest("tr").next().find(".postbody:first");

    } else if (jj("head").children("link[href*='prosilver']").length > 0) {
      dirAutor = jj(".author");
      nomAutor = dirAutor.find("strong").children("a");
      dirPost = aa => aa.next();

    } else {
      dirAutor = jj(".postauthor");
      nomAutor = dirAutor;
      dirPost = aa => aa.parent().next().find(".postbody:first");
    }


    return (() => {
      const result = [];
      for (let i = 0, end = dirAutor.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) { // Para cada post...
        var name = nomAutor.eq(i).text();

        if (pjson.hasOwnProperty(name)) { // Si el autor está en pjson...
          var posteo = dirPost(dirAutor.eq(i));

          result.push((() => {
            const result1 = [];
            for (let x of Array.from(pjson[name])) { // Para cada elemento del diccionario del autor...
              const escCon = escapada(x['concepto']);
              const clase = 'tonto' + contador;
              const cambiar = new RegExp(`(${escCon})`, "i"); //Hace falta agregar que NO busque en citas
              posteo.html(posteo.html().replace(cambiar,`<span class='concepto ${clase}' onclick='root.mongui(\"${clase}\")'>$1</span><div class='tultipo ${clase}' style='display: none'>${x['definicion']}<p class='autoria'><em>- ${name}</em></p></div>`));
              result1.push(contador += 1);
            }
            return result1;
          })());
        } else {
          result.push(undefined);
        }
      }
      return result;
    })();
  };

  return jj.ajax({
    crossOrigin: true, //Fundamental
    url: "https://alojamiento/sofos_buba.json",
    datatype: "json",
    success(data) {
      return primera(jj.parseJSON(data));
    }
  });
});
