# sofosagora tooltips

Esta es una colección de archivos para crear tooltips de diccionarios de usuarios para el foro _sofosagora.net_. Dispone básicamente de tres scripts y un pequeño archivo de estilo CSS:

1. Una araña muy simple de [scrapy](http://scrapy.org/) (que funciona sólo bajo python 2, ojo) que recorre unos determinados hilos donde los usuarios dejan sus conceptos y definiciones con una simple sintaxis. La araña crea un fichero JSON el cual luego se puede alojar el dropbox para que sea de acceso público y directo para el uso del bookmarklet.
2. Un javascript que utiliza la librería jQuery para crear tooltips con las definiciones de los usuarios contenidas en el JSON sobre las palabras de los posts de estos usuarios.
3. Un pequeño bookmarklet, un pequeño javascript dentro de un marcador de páginas web, que llama al javascript de los tooltips y al archivo de estilos.
4. Un pequeño archivo de estilos para los tooltips.

Cuando se lanza el bookmarklet el script hace un marcado de las palabras, según el autor, si están presentes en su diccionario y les añade un tooltip con las definiciones.

Los archivos se pueden alojar el dropbox y [con una pequeña modificación de la dirección de dropbox](http://techapple.net/2014/04/trick-obtain-direct-download-links-dropbox-files-dropbox-direct-link-maker-tool-cloudlinker/) ser accedidos de manera directa.

De momento el script funciona en Firefox y Chrome. No estoy seguro de si funciona en IE o cómo hacerlo funcionar debido al diferente manejo, en cuanto a seguridad, de los marcadores con scripts (de los bookmarklets).
