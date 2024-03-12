import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #ffff;
    font-family: 'Lato', sans-serif; 
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top: 30px;

    `

const Imagen = styled.img`
    display: block;
    width: 120px;

    `

const Precio = styled.div`
    font-size: 24px;
    span{
        font-weight: 700;
    }

    `

const Texto = styled.div`
  font-size: 18px;
    span{
        font-weight: 700;
    }

    `

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    console.log(PRICE);
    return (
        <Contenedor>

            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Logo criptomoneda" />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>El mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
                <Texto>El mas bajo del dia es de: <span>{LOWDAY} </span></Texto>
                <Texto>Variación Ultimas 24 horas: <span>{CHANGEPCT24HOUR} </span></Texto>
                <Texto>Ultima Actualización fue: <span>{LASTUPDATE} </span></Texto>

            </div>



        </Contenedor>

    )
}

export default Resultado