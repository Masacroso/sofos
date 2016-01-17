# sofosagora tooltips

Esta es una colección de archivos para crear tooltips de diccionarios de usuarios para el foro _sofosagora.net_. Dispone básicamente de tres scripts, un archivo JSON y un pequeño archivo de estilo CSS:

1. Una araña muy simple de scrapy (que funciona bajo python 2) que recorre unos determinados hilos donde los usuarios dejan sus conceptos y definiciones con una simple sintaxis. La araña crea un fichero JSON de acceso público y directo a través de dropbox.
2. Un javascript que utiliza la librería jQuery para crear tooltips con las definiciones de los usuarios contenidas en el JSON sobre las palabras de los posts de estos usuarios. Este archivo está minimizado y alojado para acceso directo en dropbox.
3. Un pequeño bookmarklet, un pequeño javascript dentro de un marcador de páginas web, que llama al javascript de los tolltips y al archivo de estilos.
4. Un pequeño archivo de estilos para los tooltips. También alojado en dropbox.

Cuando se lanza el bookmarklet el script hace un marcado de las palabras, según el autor, si están presentes en su diccionario y les añade un tooltip con las definiciones.
