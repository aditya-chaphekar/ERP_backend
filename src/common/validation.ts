export const checkBlank = (paramsArr:any[]): boolean => {
    let res = false;
    paramsArr.forEach((param)=> {
        if(param === "" || param === undefined || param === null)
            res = true;
    });
    return res;
}