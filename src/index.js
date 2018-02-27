// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;

    const checkH = currency / 50;
    if (checkH > 0) {
        H = Math.floor(checkH);
    };
    const checkQ = (currency - H * 50) / 25;
    if (checkQ > 0) {
        Q = Math.floor(checkQ);
    }
    const checkD = (currency - H * 50 - Q * 25) / 10;
    if (checkD > 0) {
        D = Math.floor(checkD);
    }
    const checkN = (currency - H * 50 - Q * 25 - D * 10) / 5;
    if (checkN > 0) {
        N = Math.floor(checkN);
    }
    P = (currency - H * 50 - Q * 25 - D * 10 - N * 5) / 1;
    if (currency == 0 || currency < 0) {
        return {};
    } else if (currency <= 10000) {

        let result = {};
        let obj = {
            "H": H,
            "Q": Q,
            "D": D,
            "N": N,
            "P": P
        };

        for (let key in obj) {
            if (obj[key] == 0)
                continue;
            else result[key] = obj[key];
        }

        return result;

    } else return { error: "You are rich, my friend! We don't have so much coins for exchange" };
};