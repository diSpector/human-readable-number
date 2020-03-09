module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }

    let result = '';

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10);
    let ones = number - hundreds * 100 - tens * 10;

    let tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let onesArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let exc = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (tens !== 1) {
        result = getNumber(hundreds, 'h') + ' ' + getNumber(tens, 't') + ((tens !== 0) ? ' ' : '') + getNumber(ones, 'o');
    } else {
        result = getNumber(hundreds, 'h') + ' ' + getNumber(ones, 'exc');
    }
    return result.trim();

    function getNumber(number, flag) {
        switch (flag) {
            case 'h':
                if (number == 0) {
                    return '';
                } else {
                    return onesArr[number - 1] + ' hundred';
                }
                break;
            case 't':
                if (number == 0) {
                    return '';
                } else {
                    return tensArr[number - 1];
                }
                break;
            case 'o':
                if (number < 1) {
                    return '';
                } else {
                    return onesArr[number - 1];
                }
                break;
            default:
                if (number == 0) {
                    return tensArr[number];
                } else {
                    return exc[number - 1];
                }
        }
    }

}
