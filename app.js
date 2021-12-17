function censor() {
    const listStringPairs = [];

    const changeScene = (...arg) => {
        if (arg.length <= 0 || arg.length > 2) {
           return  console.log('Функция принимает от 1 до 2 аргументов');
        }

        if (arg.length === 2) {
            listStringPairs.push([arg[0],arg[1]]);
        } else {
            for (let stringPairs of listStringPairs) {
                arg[0] = arg[0].replace(stringPairs[0], stringPairs[1]);
            }
            return arg[0]
        }  
    }

    return changeScene;
}

const changeScene = censor();

changeScene('PHP','JS');
changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'));