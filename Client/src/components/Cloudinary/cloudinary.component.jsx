import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

const apiKey = process.env.API_KEY;
const upload = process.env.UPLOAD_PRESET;
const url_cloudinary = process.env.URL_CLOUDINARY;

const SubirImagen = (props) => {

    const [imagen, setImagen] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImagen = async (e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", upload);
        data.append("api_key", apiKey);
        setLoading(true);
        const res = await fetch(
          url_cloudinary,
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
