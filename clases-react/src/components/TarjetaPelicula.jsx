export default function TarjetaPelicula({titulo, año, vista}){
return(
<>
<h1>{titulo}</h1>
<h2>{año}</h2>
<h3>{vista === true? "✓" : ""}</h3>
</>
)
}