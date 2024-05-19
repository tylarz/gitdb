const git = new(require('@arugas/gitdb'))({
    username: 'arugas',
    repository: 'gitdb',
    file: 'database',
    token: 'ghp_sEnSoR'
 })
 
 const data = {
    "name": "Aru",
    "age": 23,
    "hobby": "Nothing"
 }
 
 git.save(data).then(res => {
    console.log(res)
 })

 git.fetch().then(res => {
    console.log(res)
 })
