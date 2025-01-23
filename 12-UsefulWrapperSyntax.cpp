function App(){
  return (
    <div>
      <CardWrapper> <TextComponent /></CardWrapper>
      <CardWrapper>
        <h1>
        Hi There
        </h1>
      </CardWrapper>
    </div>
    
  )
}

function CardWrapper({children}){
  return (
    <div style = {{border: "5px solid black"}}>
      {children}
    </div>
  )
}

function TextComponent(){
  return (
    <div>
      <h1>
      Hi THere from the text TextComponent
    </h1>
    </div>
    
  )
}

export default App
