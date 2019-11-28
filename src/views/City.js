import React from "react"
import cityList from "../city"
import switchdata from "../fileters/switchdata"
class City extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: "left",
                fontSize: "16px",
                position: "relative",
                width: "100%"
            }}>{
                    switchdata.switchlist(cityList).map(v => (
                        <div key={v.First} id={v.First.toUpperCase()}>{v.First.toUpperCase()}

                            {
                                v.detail.map(x => (
                                    <div key={x.id} style={{
                                        borderBottom: "1px gray solid",
                                        padding: "10px",
                                        width: "90%"
                                    }} onClick={
                                        () => {
                                            localStorage.cityId = x.id
                                            localStorage.cityName = x.nm
                                            this.props.history.push("/movie")
                                        }
                                    }>{x.nm}</div>
                                ))
                            }
                        </div>
                    ))
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    right: 0,
                    top: "20%",
                    zIndex: 1
                }}>
                    {
                        switchdata.switchlist(cityList).map((v, index) => (<p key={v.First} style={{
                            padding: "3px"
                        }}   >
                            <a href={"#" + v.First.toUpperCase()} key={index} style={{
                                color: "black"
                            }}  > {v.First.toUpperCase()}</a>
                        </p>)

                        )
                    }
                </div>
            </div >
        )
    }

}
export default City