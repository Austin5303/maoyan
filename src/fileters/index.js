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
}
export default Tools