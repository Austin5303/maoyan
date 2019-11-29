import React from "react"
class Tools {
    static pic(v) {
        const PicImg = v.replace("w.h", "128.180")
        return PicImg
    }
    static version(v) {
        const version = v.length > 0 ? <span className={"version"}></span> : null;
        return version
    }
    static date(v) {
        let date1 = new Date(v).getTime()
        let week = new Date(v).getDay() / 1 + 1
        switch (week) {
            case 1:
                week = "周一"
                break;
            case 2:
                week = "周二"
                break;
            case 3:
                week = "周三"
                break;
            case 4:
                week = "周四"
                break;
            case 5:
                week = "周五"
                break;
            case 6:
                week = "周六"
                break;
            case 7:
                week = "周日"
                break;
            default:
                break;
        }
        const date = new Date();
        let date2 = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + "-" + date.getDate().toString().padStart(2, 0)
        date2 = new Date(date2).getTime()
        if (date1 - date2 < (1000 * 60 * 60 * 24)) {
            return "今天" + v
        } else if (date1 - date2 === (1000 * 60 * 60 * 24)) {
            return "明天" + v
        } else if (date1 - date2 === (1000 * 60 * 60 * 24) * 2) {
            return "后天" + v
        } else if (date1 - date2 > (1000 * 60 * 60 * 24) * 2) {
            return week + "" + v
        }

    }
    static date2() {
        let date = new Date()
         date = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + "-" + date.getDate().toString().padStart(2, 0)
         return date
    }
}
export default Tools