const json=require("json-server")
const s=json.create()
const r=json.router('db.json')
const m=json.defaults()
const p=3001
s.use(m)
s.use(r)
s.listen(p)
