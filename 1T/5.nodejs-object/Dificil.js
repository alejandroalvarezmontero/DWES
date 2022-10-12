function isSimilar(arrX, arrY) {
    if (typeof arrX != typeof arrY){
        return false;
    }
    if(arrX instanceof Array){
        for (let i = 0; i < arrX.length;i++){
            if (!isSimilar(arrX[i],arrY[i])){
                return false;
            }
        }
        return true;
    }
    if(arrX instanceof Object){
        const x = Object.keys(arrX);
        const y = Object.keys(arrY);
        for (let i = 0; i < x.length; i++){
            if (!isSimilar(x[i],y[i])){
                return false;
            }
            if(!isSimilar(arrX[x[i]],arrY[y[i]])){
                return false;
            }
        }
        return true;
    }
    return arrX == arrY;

}