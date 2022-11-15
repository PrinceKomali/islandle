# why am i doing this in python i dont even like python
import requests
import json
import re
c = "twlkmoiejmbhcyremtgpmqbbgugdawdmaihkcu"
# add sh, cx, cw, bq manually

def fetch(u, j = False):
    r = requests.get(u)
    if j: return r.json()
    else: return r.text

pop_html = fetch('https://www.worldometers.info/world-population/population-by-country/')
pop_list = list(map(lambda x: [x.split("<")[0], x.split('>')[3].split("<")[0]], re.split('<a href="/world-population/[^"]+">', pop_html)))
pop_list.pop(0)
pop_dict = {}
for i in pop_list: pop_dict[i[0]] = int(i[1].replace(",",''))

arr = []

countries = [c[i:i+2] for i in range(0, len(c), 2)]
for i in countries:
    j=fetch("https://restcountries.com/v3.1/alpha/" + i, True)[0]
    
    name = j["name"]["common"]
    pop = pop_dict[name.replace("Macau","Macao").replace("Réunion", "R&eacute;union")] # perhaps this wasn't the best way do do this
    lat, lng = j["latlng"]
    indep = j["independent"]
    cclaims = None
    ctype = None
    if indep or i == "tw":
        ctype = "Independent"
        cclaims = i
    elif i == "aw":
        ctype = "Constitute Country"
        cclaims = "nl" 
    elif i == "mo" or i == "hk":
        ctype = "Special Administrative Region"
        cclaims = "cn"
    else:
        # oh boy here we go (why did i do this)
        wiki = fetch("https://wikipedia.com/wiki/" + name)
        if len(wiki.lower().split("united states")) >= 100:
            cclaims = "us"
            ctype = "Administered"
        if len(wiki.lower().split("british overseas")) >= 5: # 24 matches on montserrat
            cclaims = "gb"
            ctype = "Territory"
        elif len(wiki.lower().split("french overseas")) >= 3:
            cclaims = "fr"
            ctype = "Dependency"

    arr.append({
        "name": name,
        "image": False,
        "population": pop,
        "lat": lat,
        "long": lng,
        "claims": {
            "countries": [ cclaims ],
            "type": ctype

        },
        "territory": i

    })
print(json.dumps(arr))