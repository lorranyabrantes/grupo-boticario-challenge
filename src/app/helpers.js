const helper = {
    formatMoney(value) {
        return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    },
    isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    cpfMask(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },
    dateMask(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d{1,2})/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1')
    },
    numberMask(value) {
        return value
            .replace(/([a-zA-Z-])/g, '')
    },
    orderCodeMask(value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{0})(\d)/, '#$1$2')
        .replace(/(\d{13})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    }
}

export default helper;
