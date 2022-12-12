
export const fetchTxt = (raw) => {
    const lst = []
    fetch(raw)
    .then(r => r.text())
    .then(text => {
        lst.push(...text.split("\n"))
        
    })
    
    return lst;
}