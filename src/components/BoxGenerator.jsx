
const BoxGenerator = (props) => {
  return (
    <div style={{backgroundColor: props.box.color,
    width: "100px", height: "100px",
    display: "inline-block",
    color: "white",
    margin: "20px"}}>
    </div>
  )
}

export default BoxGenerator