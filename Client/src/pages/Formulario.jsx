import { Link } from 'react-router-dom'
import './Formulario.css'

function Formulario() {
  return (
    <>
        <div className='margin_form'>
          <div className='formbg'>
            <div className='formbg-inner padding-horizontal--48'>
              <span className='padding-bottom--15'>Crear cuenta de Travel&Working</span>
              <form id='stripe-login'>
                <div className='field padding-bottom--24'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='name' name='name' placeholder='Escriba su nombre' />
                </div>
                <div className='field padding-bottom--24'>
                  <label htmlFor='lastname'>Apellido</label>
                  <input type='lastname' name='lastname' placeholder='Escriba su apellido' />
                </div>
                <label htmlFor='Fecha de nacimiento'>Fecha de nacimiento</label>

                <div className='field padding-bottom--24 box_fecha_nacimiento'>
                  <div>
                    <select id='dobMonth' name='dobMonth' data-dob='' class='form-control input-lg'>
                      <option disabled='' selected='' hidden=''>
                        Mes
                      </option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                  </div>

                  <select id='dobDay' name='dobDay' data-dob='' class='form-control input-lg'>
                    <option disabled='' selected='' hidden=''>
                      Dia
                    </option>
                    <option value='01'>1</option>
                    <option value='02'>2</option>
                    <option value='03'>3</option>
                    <option value='04'>4</option>
                    <option value='05'>5</option>
                    <option value='06'>6</option>
                    <option value='07'>7</option>
                    <option value='08'>8</option>
                    <option value='09'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                  </select>

                  <select id='dobYear' name='dobYear' data-dob='' class='form-control input-lg'>
                    <option disabled='' selected='' hidden=''>
                      Año
                    </option>
                    <option value='2004'>2004</option>
                    <option value='2003'>2003</option>
                    <option value='2002'>2002</option>
                    <option value='2001'>2001</option>
                    <option value='2000'>2000</option>
                    <option value='1999'>1999</option>
                    <option value='1998'>1998</option>
                    <option value='1997'>1997</option>
                    <option value='1996'>1996</option>
                    <option value='1995'>1995</option>
                    <option value='1994'>1994</option>
                    <option value='1993'>1993</option>
                    <option value='1992'>1992</option>
                    <option value='1991'>1991</option>
                    <option value='1990'>1990</option>
                    <option value='1989'>1989</option>
                    <option value='1988'>1988</option>
                    <option value='1987'>1987</option>
                    <option value='1986'>1986</option>
                    <option value='1985'>1985</option>
                    <option value='1984'>1984</option>
                    <option value='1983'>1983</option>
                    <option value='1982'>1982</option>
                    <option value='1981'>1981</option>
                    <option value='1980'>1980</option>
                    <option value='1979'>1979</option>
                    <option value='1978'>1978</option>
                    <option value='1977'>1977</option>
                    <option value='1976'>1976</option>
                    <option value='1975'>1975</option>
                    <option value='1974'>1974</option>
                    <option value='1973'>1973</option>
                    <option value='1972'>1972</option>
                    <option value='1971'>1971</option>
                    <option value='1970'>1970</option>
                    <option value='1969'>1969</option>
                    <option value='1968'>1968</option>
                    <option value='1967'>1967</option>
                    <option value='1966'>1966</option>
                    <option value='1965'>1965</option>
                    <option value='1964'>1964</option>
                    <option value='1963'>1963</option>
                    <option value='1962'>1962</option>
                    <option value='1961'>1961</option>
                    <option value='1960'>1960</option>
                    <option value='1959'>1959</option>
                    <option value='1958'>1958</option>
                    <option value='1957'>1957</option>
                    <option value='1956'>1956</option>
                    <option value='1955'>1955</option>
                    <option value='1954'>1954</option>
                    <option value='1953'>1953</option>
                    <option value='1952'>1952</option>
                    <option value='1951'>1951</option>
                    <option value='1950'>1950</option>
                    <option value='1949'>1949</option>
                    <option value='1948'>1948</option>
                    <option value='1947'>1947</option>
                    <option value='1946'>1946</option>
                    <option value='1945'>1945</option>
                    <option value='1944'>1944</option>
                    <option value='1943'>1943</option>
                    <option value='1942'>1942</option>
                    <option value='1941'>1941</option>
                    <option value='1940'>1940</option>
                    <option value='1939'>1939</option>
                    <option value='1938'>1938</option>
                    <option value='1937'>1937</option>
                    <option value='1936'>1936</option>
                    <option value='1935'>1935</option>
                    <option value='1934'>1934</option>
                    <option value='1933'>1933</option>
                    <option value='1932'>1932</option>
                    <option value='1931'>1931</option>
                    <option value='1930'>1930</option>
                    <option value='1929'>1929</option>
                    <option value='1928'>1928</option>
                    <option value='1927'>1927</option>
                    <option value='1926'>1926</option>
                    <option value='1925'>1925</option>
                    <option value='1924'>1924</option>
                    <option value='1923'>1923</option>
                  </select>
                </div>

                <div className='field padding-bottom--24'>
                  <label htmlFor='email'>Residencia</label>
                  <div>
                    <select id='dobMonth' name='dobMonth' data-dob='' class='form-control input-lg'>
                      <option disabled='' selected='' hidden=''>
                        Lugar de residencia
                      </option>
                      <option value='01'>Álava</option>
                      <option value='02'>Albacete</option>
                      <option value='03'>Alicante</option>
                      <option value='04'>Almería</option>
                      <option value='05'>Asturias</option>
                      <option value='06'>Ávila</option>
                      <option value='07'>Badajoz</option>
                      <option value='08'>Baleares</option>
                      <option value='09'>Barcelona</option>
                      <option value='10'>Burgos</option>
                      <option value='11'>Cáceres</option>
                      <option value='12'>Cádiz</option>
                      <option value='13'>Cantabria</option>
                      <option value='14'>Castellón</option>
                      <option value='15'>Ceuta</option>
                      <option value='16'>Ciudad Real</option>
                      <option value='17'>Córdoba</option>
                      <option value='18'>Cuenca</option>
                      <option value='19'>Gerona</option>
                      <option value='20'>Granada</option>
                      <option value='21'>Guadalajara</option>
                      <option value='22'>Guipúzcoa</option>
                      <option value='23'>Huelva</option>
                      <option value='24'>Huesca</option>
                      <option value='25'>Jaén</option>
                      <option value='26'>La Coruña</option>
                      <option value='27'>La Rioja</option>
                      <option value='28'>Las Palmas</option>
                      <option value='29'>León</option>
                      <option value='30'>Lérida</option>
                      <option value='31'>Lugo</option>
                      <option value='32'>Madrid</option>
                      <option value='33'>Málaga</option>
                      <option value='34'>Melilla</option>
                      <option value='35'>Murcia</option>
                      <option value='36'>Navarra</option>
                      <option value='37'>Orense</option>
                      <option value='38'>Palencia</option>
                      <option value='39'>Pontevedra</option>
                      <option value='40'>Salamanca</option>
                      <option value='41'>Segovia</option>
                      <option value='42'>Sevilla</option>
                      <option value='43'>Soria</option>
                      <option value='44'>Tarragona</option>
                      <option value='45'>Tenerife</option>
                      <option value='46'>Teruel</option>
                      <option value='47'>Toledo</option>
                      <option value='48'>Valencia</option>
                      <option value='49'>Valladolid</option>
                      <option value='50'>Vizcaya</option>
                      <option value='51'>Zamora</option>
                      <option value='52'>Zaragoza</option>
                    </select>
                  </div>
                </div>

                <div className='field padding-bottom--24'>
                  <label htmlFor='email'>Correo electrónico</label>
                  <input type='email' name='email' placeholder='Escriba un correo electrónico' />
                </div>
                <div className='field padding-bottom--24'>
                  <div className='grid--50-50'>
                    <label htmlFor='password'>Contraseña</label>
                    <div className='reset-pass'></div>
                  </div>
                  <input type='password' name='password' placeholder='Escriba una contraseña' />
                </div>

                <div className='field padding-bottom--24'>
                  <input type='submit' name='submit' value='Entrar' />
                </div>
                <Link to='/login'>¿Ya tienes cuenta?</Link>
              </form>
            </div>
          </div>
          </div>
      
    </>
  )
}

export default Formulario
