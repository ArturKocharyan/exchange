const countryCurrencies = [
    { name: "Albania", currency: "ALL", flag: "http://flags.fmcdn.net/data/flags/mini/al.png" },
    { name: "Algeria", currency: "DZD", flag: "http://flags.fmcdn.net/data/flags/mini/dz.png" },
    { name: "Andorra", currency: "EUR", flag: "http://flags.fmcdn.net/data/flags/mini/ad.png" },
    { name: "Angola", currency: "AOA", flag: "http://flags.fmcdn.net/data/flags/mini/ao.png" },
    { name: "Antigua", currency: "XCD", flag: "http://flags.fmcdn.net/data/flags/mini/ag.png"},
    { name: "Argentina", currency: "ARS", flag: "http://flags.fmcdn.net/data/flags/mini/ag.png" },
    { name: "Armenia", currency: "AMD", flag: "http://flags.fmcdn.net/data/flags/mini/am.png" },
    { name: "Australia", currency: "AUD", flag: "http://flags.fmcdn.net/data/flags/mini/au.png" },
    { name: "Austria", currency:"EUR", flag: "http://flags.fmcdn.net/data/flags/mini/at.png"},
    { name: "Azerbaijan", currency: "AZN", flag: "http://flags.fmcdn.net/data/flags/mini/az.png"},
    { name: "Bangladesh", currency: "BDT", flag: "http://flags.fmcdn.net/data/flags/mini/bd.png"},
    { name: "Barbados", currency: "BBD", flag: "http://flags.fmcdn.net/data/flags/mini/bb.png"},
    { name: "Bahamas", currency: "BSD", flag: "http://flags.fmcdn.net/data/flags/mini/bs.png"},
    { name: "Bahrain", currency: "BHD", flag: "http://flags.fmcdn.net/data/flags/mini/bh.png"},
    { name: "Benin", currency: "XOF", flag: "http://flags.fmcdn.net/data/flags/mini/bj.png"},
    { name: "Bhutan", currency: "INR", flag: "http://flags.fmcdn.net/data/flags/mini/bt.png"},
    { name: "Bolivia", currency: "BOB", flag: "http://flags.fmcdn.net/data/flags/mini/bo.png"},
    { name: "Bosnia and Herzegovina", currency: "BAM", flag: "http://flags.fmcdn.net/data/flags/mini/ba.png"},
    { name: "Botswana", currency: "BWP", flag: "http://flags.fmcdn.net/data/flags/mini/bw.png" },
    { name: "Bulgaria", currency: "BGN", flag: "http://flags.fmcdn.net/data/flags/mini/bg.png"},
    { name: "Canada", currency: "CAD", flag: "http://flags.fmcdn.net/data/flags/mini/ca.png" },
    { name: "China", currency: "CNY", flag: "http://flags.fmcdn.net/data/flags/mini/cn.png" },
    { name: "Cambodia", currency: "KHR", flag: "http://flags.fmcdn.net/data/flags/mini/kh.png"},
    { name: "Cameroon", currency: "XAF", flag: "http://flags.fmcdn.net/data/flags/mini/cm.png"},
    { name: "Central African Republic", currency: "XAF", flag: "http://flags.fmcdn.net/data/flags/mini/cf.png"},
    { name: "Chad", currency: "XAF", flag: "http://flags.fmcdn.net/data/flags/mini/td.png"},
    { name: "Comoros", currency: "KMF", flag:"http://flags.fmcdn.net/data/flags/mini/km.png"},
    { name: "Cook Islands", currency: "NZD", flag: "http://flags.fmcdn.net/data/flags/mini/ck.png"},
    { name: "Costa Rica", currency: "CRC", flag: "http://flags.fmcdn.net/data/flags/mini/cr.png"},
    { name: "Cote d'Ivoire", currency: "XOF", flag: "http://flags.fmcdn.net/data/flags/mini/ci.png"},
    { name: "Croatia", currency: "EUR", flag: "http://flags.fmcdn.net/data/flags/mini/hr.png"},
    { name: "Cuba", currency: "CUP", flag: "http://flags.fmcdn.net/data/flags/mini/cu.png"},
    { name: "Cyprus", currency: "EUR", flag: "http://flags.fmcdn.net/data/flags/mini/cy.png" },
    { name: "Czech Republic", currency: "CZK", flag: "http://flags.fmcdn.net/data/flags/mini/cz.png"},
    { name: "Democratic Republic of the Congo" , currency: "CDF", flag: "http://flags.fmcdn.net/data/flags/mini/cd.png"},
    { name: "Denmark", currency: "DKK", flag: "http://flags.fmcdn.net/data/flags/mini/dk.png"},
    { name: "Djibouti", currency: "DJF", flag: "http://flags.fmcdn.net/data/flags/mini/dj.png"},
    { name: "Dominica", currency: "XCD", flag: "http://flags.fmcdn.net/data/flags/mini/dm.png"},
    { name: "East Timor", currency: "USD", flag: "http://flags.fmcdn.net/data/flags/mini/tl.png"},
    { name: "Ecuador", currency: "USD", flag: "http://flags.fmcdn.net/data/flags/mini/ec.png"},
    { name: "El Salvador", currency: "USD", flag: "http://flags.fmcdn.net/data/flags/mini/sv.png"},
    { name: "Eritrea", currency: "ERN", flag: "http://flags.fmcdn.net/data/flags/mini/er.png"},
    { name: "Estonia", currency: "EUR", flag: "http://flags.fmcdn.net/data/flags/mini/ee.png"},
    { name: "Ethiopia", currency: "ETB", flag: "http://flags.fmcdn.net/data/flags/mini/et.png"},
    { name: "Fiji", currency: "FJD", flag: "http://flags.fmcdn.net/data/flags/mini/fj.png"},
    { name: "Finland", currency: "EUR",flag: "http://flags.fmcdn.net/data/flags/mini/fi.png"},
    { name: "Gabon", currency: "XAF", flag: "http://flags.fmcdn.net/data/flags/mini/ga.png"},
    { name: "Gambia", currency: "GMD", flag: "http://flags.fmcdn.net/data/flags/mini/gm.png"},
    { name: "Ghana", currency: "GHS", flag: "http://flags.fmcdn.net/data/flags/mini/gh.png"},
    { name: "Germany", currency: "EUR", flag: "http://flags.fmcdn.net/data/flags/mini/de.png" },
    { name: "India", currency: "INR", flag: "http://flags.fmcdn.net/data/flags/mini/in.png" },
    { name: "Georgia", currency: "GEL", flag: "http://flags.fmcdn.net/data/flags/mini/ge.png"},
    { name: "Japan", currency: "JPY", flag: "http://flags.fmcdn.net/data/flags/mini/jp.png" },
    { name: "Kazakhstan", currency: "KZT", flag: "http://flags.fmcdn.net/data/flags/mini/kz.png" },
    { name: "Russia", currency: "RUB", flag: "http://flags.fmcdn.net/data/flags/mini/ru.png" },
    { name: "Turkey", currency: "TRY", flag: "http://flags.fmcdn.net/data/flags/mini/tr.png"},
    { name: "United Arab Emirates", currency: "AED", flag: "http://flags.fmcdn.net/data/flags/mini/ae.png" },
    { name: "United Kingdom", currency: "GBP", flag: "http://flags.fmcdn.net/data/flags/mini/gb.png" },
    { name: "USA", currency: "USD", flag: "http://flags.fmcdn.net/data/flags/mini/us.png" }
];

export default countryCurrencies