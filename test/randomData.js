exports.generateRandomData = () => {
    const getRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const getRandomEmail = () => {
        const domain = ['gmail.com', 'njnhjhj.com', 'example.com'];
        const randomDomain = domain[Math.floor(Math.random() * domain.length)];
        return getRandomString(10) + '@' + randomDomain;
    };
};
module.exports = {
    text: getRandomString(5),
    password: getRandomString(8),
    email: getRandomEmail(9),
};