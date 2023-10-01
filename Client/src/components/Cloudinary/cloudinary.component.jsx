import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

const SubirImagen = (props) => {
    
    const [imagen, setImagen] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImagen = async (e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "moveonFoto");
        data.append("api_key", "785132485474623");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dypvjtv39/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        setImagen(file.secure_url);
        setLoading(false);
    } 
  return (
    <div>
      <Container>
        <h1>Subiendo imagenes</h1>
        <FormGroup>
          <Input type="file" name="file" placeholder="Sube tu imagen aquí" onChange={uploadImagen} />
          {loading ? (<h3>Cargando imagen...</h3>): (<img src={imagen} style={{widht:"10px"}}></img>)}
        </FormGroup>
      </Container>
    </div>
  );
};

export default SubirImagen;
