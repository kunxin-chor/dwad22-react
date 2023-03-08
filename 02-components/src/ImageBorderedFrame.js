function ImageBorderedFrame() {
    return (<div style={{
        "border":"4px solid red",
        "backgroundColor":"pink"
    }}>
        <img src={require("./sushi.jfif")}/>
    </div>)
}
export default ImageBorderedFrame;