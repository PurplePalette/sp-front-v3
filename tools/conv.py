from copy import deepcopy
import json

"""
Sonolus localization file -> i18n JSON converter
"""

path = input("input file name >>")

with open(path, "r", encoding="utf8") as f:
    raw = json.loads(f.read())

data = raw["entries"]
out = {}

for d in data:
    keys = d["name"].split(".")
    target = out
    k = keys.pop(0)
    while len(keys) > 0:
        if k not in target.keys():
            target[k] = {}
        target = target[k]
        k = keys.pop(0)
    target[k] = d["text"]

out["Sonolus"] = deepcopy(out["UI"])
del out["UI"]

with open(f"{path.replace('.json','_out.json')}", "w", encoding="utf8") as f:
    f.write(json.dumps(out, indent=4, ensure_ascii=False))
