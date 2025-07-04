function elevate(num) {
    const str = num.toString();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const squaredNum = Math.pow(str[i], 2);
        result = `${result}${squaredNum.toString()}`;
    }

    return Number(result);
}
console.log(elevate(2134));

// utilizando map

function square(num) {
    const digitisArray = num.toString().split("");
    const squaredArray = digitisArray.map((num) => Number(num) ** 2).join("");

    return Number(squaredArray);
}
console.log(square(491092));
