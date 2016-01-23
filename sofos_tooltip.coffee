jj = jQuery.noConflict()
root = exports ? this
jj ->
  # Ésta es la función ligada al evento 'onclick' de las palabras marcadas
  root.mongui = (xx) ->
    jj('.tultipo.' + xx + '').slideToggle("200")
    jj('.concepto.' + xx + '').toggleClass("inversion")

  # Cadena escapada para poder utilizarla en un objecto RegEx
  escapada = (cadena)->
    cadena.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")

  # La función sobre el json parseado (pjson) empieza aquí
  primera = (pjson) ->
    contador = 0

    # La estructura html es diferente según el estilo que se use del foro
    if jj("head").children("link[href*='subsilver2']").length > 0
      dirAutor = jj(".postauthor")
      nomAutor = dirAutor
      dirPost = (aa) -> aa.closest("tr").next().find(".postbody:first")

    else if jj("head").children("link[href*='prosilver']").length > 0
      dirAutor = jj(".author")
      nomAutor = dirAutor.find("strong").children("a")
      dirPost = (aa) -> aa.next()

    else
      dirAutor = jj(".postauthor")
      nomAutor = dirAutor
      dirPost = (aa) -> aa.parent().next().find(".postbody:first")


    for i in [0...dirAutor.length] # Para cada post...
      name = nomAutor.eq(i).text()

      if pjson.hasOwnProperty(name) # Si el autor está en pjson...
        posteo = dirPost(dirAutor.eq(i))

        for x in pjson[name] # Para cada elemento del diccionario del autor...
          escCon = escapada x['concepto']
          clase = 'tonto' + contador
          cambiar = new RegExp("(#{escCon})", "i") #Hace falta agregar que NO busque en citas
          posteo.html(posteo.html().replace(cambiar,"<span class='concepto #{clase}' onclick='root.mongui(\"#{clase}\")'>$1</span><div class='tultipo #{clase}' style='display: none'>#{x['definicion']}<p class='autoria'><em>- #{name}</em></p></div>"))
          contador += 1

  jj.ajax({
    crossOrigin: true #Fundamental
    url: "https://alojamiento/sofos_buba.json"
    datatype: "json"
    success: (data) ->
      primera jj.parseJSON(data)
