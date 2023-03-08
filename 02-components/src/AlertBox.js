export default function AlertBox(props) {
    return <div style={{
        "padding":"10px",
        "margin": "1em",
        "border": "1px solid red",
        "backgroundColor": props.bgcolor
    }}>
        {props.msg}
          </div>
}
