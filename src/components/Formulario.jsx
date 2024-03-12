import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { useEffect, useState } from 'react'
import Error from './Error'

// importamos el objeto de monedas
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: white;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
&:hover{
  background-color:#7a7dfe ;
  transition: background-color .3s ease;
  cursor: pointer;
}

`

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)



  // le pasamos el objeto de monedass para mostrarlo en la vista
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);


  useEffect(() => {

    const consultarAPI = async () => {

      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

      const respuesta = await fetch(url)

      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto

      })
      setCriptos(arrayCriptos)
    }
    consultarAPI();
  }, [])


  // TODO: FUNCION AL HACER CLIC EN BOTON DE FORMULARIO
  const handleSubmit = e => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes('')) {
      setError(true)
      return;
    }
    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })

  }
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>

        <SelectMonedas />
        <SelectCriptomoneda />

        <InputSubmit
          type="submit" value="CALCULAR"
        />

      </form>
    </>
  )
}

export default Formulario