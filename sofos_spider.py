# -*- coding: utf-8 -*-
# Para utilizarla debes meter esta araña en un template de scrapy y definir un item sofosItem()
# o modificar este código (realmente no es necesario usar ningún item).

import scrapy,re,json
from tutorial_scrapy.items import sofosItems

super = {}

class sofosSpider(scrapy.Spider):
    name = "sofos"
    allowed_domains = ["sofosagora.net"]
    start_urls = [
      "http://sofosagora.net/rellano-f58/script-diccionarios-los-usuarios-t6163.html"
    ]   
    
    def parse(self, response):
        dicti = re.compile(r'(?P<concepto>.*?):(?:<br>|\s)*(?P<definicion>.*?)(?:<br>|</div>)*$')
        for autor in response.xpath('//b[@class="postauthor"]'):
            item = sofosItems() 
            item['autor'] = autor.xpath('text()').extract()
            for spoiler in autor.xpath('following::*[@class="postbody"][1]//*[contains(@style,"display: none")]'):
                bloques = re.split('#',spoiler.extract())
                del bloques[0]
                for x in bloques:
                    item['coleccion'] = dicti.match(x).groupdict()
                    if item['coleccion']['definicion'] != "":
                        item['coleccion']['definicion'] = item['coleccion']['definicion'].replace("&gt;",">").replace("&lt;","<").replace("&amp;","&")
                        super.setdefault(item['autor'][0], []).append(item['coleccion'])
            
        next_page = response.xpath('//td[@class="gensmall"]//strong[1]/following-sibling::a[1]/@href')
        if next_page:
            url = response.urljoin(next_page[0].extract())
            return scrapy.Request(url, self.parse)
        
        with open(r'sofos_buba.json', 'wb') as outfile:
            json.dump(super, outfile)
