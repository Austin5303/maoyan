const switchdata = {
    switchcomingdata(data) {
        let obj1 = {};
        let arr = [];
        let brr = [];
        let obja = {};
        let crr = [];
        for (let i in data) {
            arr.push(data[i].rt)
        }
        for (let i of arr) {
            if (!obj1[i]) {
                brr.push(i);
                obj1[i] = 1;
            }
        }
        for (let i in brr) {
            obja.rt = brr[i]
            obja.detail = []
            for (let j in data) {
                if (brr[i] === data[j].rt) {
                    obja.detail.push(data[j])
                }
            }
            crr.push(obja)
            obja = {}

        }
        return (crr)
    },
    switchlist(cityList) {
        let obj1 = {};
        let arr = [];
        let brr = [];
        let obja = {};
        let crr = [];
        for (let i in cityList) {
            arr.push(cityList[i].py.substring(0, 1))
        }
        for (let i of arr) {
            if (!obj1[i]) {
                brr.push(i);
                obj1[i] = 1;
            }
        }
        brr = brr.sort()
        for (let i in brr) {
            obja.First = brr[i]
            obja.detail = []
            for (let j in cityList) {
                if (brr[i] === cityList[j].py.substring(0, 1)) {
                    obja.detail.push(cityList[j])
                }
            }
            crr.push(obja)
            obja = {}
        }
        return (crr)
    }
}
export default switchdata