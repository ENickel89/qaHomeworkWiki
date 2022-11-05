export function myFunction({ myNum }: { myNum: number; }): string {
    if (myNum == 7) {
        return "true";
    } else if(myNum < 7 && myNum >=0) {
        return "false";
    }else if (myNum > 7) {
        return "big";
    }else {
        return "negative";
    }
}