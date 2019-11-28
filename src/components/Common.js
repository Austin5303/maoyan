export function loading(My) {
    class App extends My {
        render() {
            console.log(this.state.isLoading)
            const loadingJsx = <h5>拼命加载中……</h5>
            return (
                <div>
                    {
                        this.state.isLoading ? loadingJsx : super.render()
                    }
                </div>

            )
        }
    }
    return App
}