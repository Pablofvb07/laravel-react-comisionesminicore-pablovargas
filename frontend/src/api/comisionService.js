import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/comisiones";

export const obtenerComisiones = async (inicio, fin) => {
  const response = await axios.post(API_URL, {
    fecha_inicio: inicio,
    fecha_fin: fin
  });

  return response.data;
};