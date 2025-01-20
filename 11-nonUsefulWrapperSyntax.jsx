

function App() {
return (
  <div>
    <CardWrapper innerComponent = {<TextComponent />}></CardWrapper>
  </div>
)
}
function CardWrapper({innerComponent}){
  return (
    <div style={{border:"2px solid black"}}>
    {innerComponent}
  </div>
  )
}

function TextComponent(){
  return (
    <h1>
      Hi there!
    </h1>
  )
}
export default App
