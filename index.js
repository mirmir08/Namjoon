const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const app = express();
app.use(cors());

//Peliculas--33
//Ventas botelos--102
//Funcion--172
//Venta dulceria--241




// Inicializar Firebase
app.use(express.json());

const serviceAccount = require("./firebase-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



// Rutas
const db = admin.firestore();

app.get("/", (req, res) => { //Ruta GET
  res.send("Servidor corriendo Firebase");});



  // Peliculas
  // Crear documento usuario osea agregar pelicula
app.post("/peliculas/add", async (req, res) => { //Ruta POST
  try {
    const {fech_fin, fech_ini, nombre} = req.body;    
    // Agregar documento a la colección "usuarios"   
    const docRef = await db.collection("peliculas").add({fech_fin, fech_ini, nombre }); 
    res.json({ id: docRef.id, message: "Pelicula agregada" });  
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Para ver 
// Obtener datos de los documentos
app.get("/peliculas/ver", async (req, res) => {
  try {
    const items = await db.collection("peliculas").get();

    const peliculas = items.docs.map(doc => { // Mapear documentos a un array de objetos
      const data = doc.data();
      return {
        id: doc.id,
        fech_fin: data.fech_fin,
        fech_ini: data.fech_ini,
        nombre: data.nombre
        
      };
    });

    res.json(peliculas); // Enviar array de usuarios como respuesta en JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Para actualizar

app.put("/peliculas/up/:id", async (req, res) => {
  try {
    const {id} = req.params; // Obtener ID del documento desde los parámetros de la URL
    const datos = req.body; //Requiere del body para actualizar {"" : ""}
    await db.collection("peliculas").doc(id).update(datos);
    res.json(peliculas); 
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Eliminar
//No se tiene permitido
app.delete("/peliculas/del/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("peliculas").doc(id).delete();
    res.json({ message: "Se elimino la pelicula, no esta permitido" });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//Ventas boletos
// Crear documento usuario osea agregar venta de boleto
app.post("/ventas_Boletos/add", async (req, res) => { //Ruta POST
  try {
    const {hora, total} = req.body;    
    // Agregar documento a la colección "usuarios"   
    const docRef = await db.collection("Ventas_Boletos").add({hora, total }); 
    res.json({ id: docRef.id, message: "Venta agregada" });  
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Para ver 
// Obtener datos de los documentos
app.get("/ventas_Boletos/ver", async (req, res) => {
  try {
    const items = await db.collection("Ventas_Boletos").get();

    const Ventas_Boletos = items.docs.map(doc => { // Mapear documentos a un array de objetos
      const data = doc.data();
      return {
        id: doc.id,
        hora: data.hora,
        total: data.total
        
      };
    });

    res.json(Ventas_Boletos); // Enviar array de usuarios como respuesta en JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Para actualizar

app.put("/ventas_Boletos/up/:id", async (req, res) => {
  try {
    const {id} = req.params; // Obtener ID del documento desde los parámetros de la URL
    const datos = req.body; //Requiere del body para actualizar {"" : ""}
    await db.collection("Ventas_Boletos").doc(id).update(datos);
    res.json(Ventas_Boletos); 
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Eliminar
//No se tiene permitido
app.delete("/ventas_Boletos/del/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("Ventas_Boletos").doc(id).delete();
    res.json({ message: "Se elimino la venta de boleto, no esta permitido" });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





//Funcion
// Crear documento usuario osea agregar funcion
app.post("/funcion/add", async (req, res) => { //Ruta POST
  try {
    const {asien_disp, horario} = req.body;    
    // Agregar documento a la colección "usuarios"   
    const docRef = await db.collection("funcion").add({asien_disp, horario }); 
    res.json({ id: docRef.id, message: "funcion" });  
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Para ver 
// Obtener datos de los documentos
app.get("/funcion/ver", async (req, res) => {
  try {
    const items = await db.collection("funcion").get();

    const funcion = items.docs.map(doc => { // Mapear documentos a un array de objetos
      const data = doc.data();
      return {
        id: doc.id,
        asien_disp: data.asien_disp,
        horario: data.horario
        
      };
    });

    res.json(funcion); // Enviar array de usuarios como respuesta en JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Para actualizar

app.put("/funcion/up/:id", async (req, res) => {
  try {
    const {id} = req.params; // Obtener ID del documento desde los parámetros de la URL
    const datos = req.body; //Requiere del body para actualizar {"" : ""}
    await db.collection("funcion").doc(id).update(datos);
    res.json(funcion); 
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Eliminar
//No se tiene permitido
app.delete("/funcion/del/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("funcion").doc(id).delete();
    res.json({ message: "Se elimino la funcion, no esta permitido" });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




//Venta Dulceria
// Crear documento usuario osea agregar venta de dilceria
app.post("/Venta_Dulceria/add", async (req, res) => { //Ruta POST
  try {
    const {hora, total} = req.body;    
    // Agregar documento a la colección "usuarios"   
    const docRef = await db.collection("Venta_Dulceria").add({hora, total }); 
    res.json({ id: docRef.id, message: "Venta agregada" });  
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Para ver 
// Obtener datos de los documentos
app.get("/Venta_Dulceria/ver", async (req, res) => {
  try {
    const items = await db.collection("Venta_Dulceria").get();

    const Venta_Dulceria = items.docs.map(doc => { // Mapear documentos a un array de objetos
      const data = doc.data();
      return {
        id: doc.id,
        hora: data.hora,
        total: data.total
        
      };
    });

    res.json(Venta_Dulceria); // Enviar array de usuarios como respuesta en JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Para actualizar

app.put("/Venta_Dulceria/up/:id", async (req, res) => {
  try {
    const {id} = req.params; // Obtener ID del documento desde los parámetros de la URL
    const datos = req.body; //Requiere del body para actualizar {"" : ""}
    await db.collection("Venta_Dulceria").doc(id).update(datos);
    res.json(Venta_Dulceria); 
    } 
    catch (error) {
    res.status(500).json({ error: error.message });  
    }
});


//Eliminar
//No se tiene permitido
app.delete("/Venta_Dulceria/del/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("Venta_Dulceria").doc(id).delete();
    res.json({ message: "Se elimino la venta de dulceria, no esta permitido" });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// Conexión al servidor
const PORT = 3000;app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));