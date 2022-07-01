import React from 'react'
import { Link } from 'react-router-dom'

const MainScreen = () => {
  return (
    <>
      <div className='main-screen'>

        <div className='leads-content'>
          <div className='leads'>
            <h2>All Leads</h2>
          </div>
          <div className='lead-button'>
            <button>Create Lead</button>
          </div>
        </div>


        <div className='search-section'>
          <div className='search-item'>
            <div className='box-refresh'>
              <Link to="#">
                <img src="/image/box.svg" />
              </Link>
              <Link to="#">
                <img src="/image/refresh.svg" />
              </Link>

            </div>
            <div className='search-box'>
              <div className='search'>
                <img src="/image/search-icon.svg" />
                <input type="text" placeholder='Search Items' />
              </div>
              <div className='line-icon'>
                <Link to="#">
                  <img src="/image/line.svg" />
                </Link>
              </div>
            </div>
          </div>
          <div className='search-content'>
            <div className='content'>
              <h2>1-50 of 2,619</h2>
            </div>
            <div className='arrow-img'>
              <img src="/image/leftarrow.svg" />
              <img src="/image/rightarrow.svg" />
            </div>
          </div>
        </div>
        {/* <hr/> */}

        <table className='table'>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">Updated At</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">State</th>
              <th scope="col">Program</th>
              <th scope="col">Status</th>
              <th scope="col">Next Call Date</th>
              <th scope="col">Manager</th>
              <th scope="col">Campus</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>1</td>
              <td>12:10 PM</td>
              <td>Salmaan Ansari</td>
              <td>8288822959</td>
              <td>Andaman & Nicobar</td>
              <td>Doctoral Program</td>
              <td>Not Serviced</td>
              <td>Aug 07, 2019</td>
              <td>Courtney Henry</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>2</td>
              <td>05:20 PM</td>
              <td>Darrell Steward</td>
              <td>987654323</td>
              <td>Meghalaya</td>
              <td>Marketing</td>
              <td>Not Serviced</td>
              <td>Nov 16, 2016</td>
              <td>Wade Warren</td>
              <td>PB</td>
              <td>Organic</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>3</td>
              <td>Tomorrow</td>
              <td>Jacob Jones</td>
              <td>9856234569</td>
              <td>Haryana</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Feb 10, 2018</td>
              <td>Albert Flores</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>4</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>


            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>5</td>
              <td>Nov 8, 2020</td>
              <td>Bessie cooper</td>
              <td>9873455678</td>
              <td>Karnataka</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>6</td>
              <td>Dec 29, 2020</td>
              <td>Dianne Russell</td>
              <td>98634745123</td>
              <td>Amdhra Pradesh</td>
              <td>Nursing</td>
              <td>Not Serviced</td>
              <td>Sep 19, 2010</td>
              <td>Bessie Cooper</td>
              <td>PB</td>
              <td>Apllied Online</td>
            </tr>

            {/*  7*/}



            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>7</td>
              <td>Nov 8, 2020</td>
              <td>Bessie cooper</td>
              <td>9873455678</td>
              <td>Karnataka</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>8</td>
              <td>Nov 8, 2020</td>
              <td>Bessie cooper</td>
              <td>9873455678</td>
              <td>Karnataka</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>9</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>


            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>10</td>
              <td>Nov 8, 2020</td>
              <td>Bessie cooper</td>
              <td>9873455678</td>
              <td>Karnataka</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>11</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>12</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>

            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>13</td>
              <td>Nov 8, 2020</td>
              <td>Bessie cooper</td>
              <td>9873455678</td>
              <td>Karnataka</td>
              <td>Engineering (B.E) Programs</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>14</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>

            <tr className='row-sky'>
              <td><input type="checkbox"></input></td>
              <td>15</td>
              <td>Nov 3, 2020</td>
              <td>Kristin Watson</td>
              <td>8899546328</td>
              <td>Lakshadweep</td>
              <td>B.Pharm/M.Pharm</td>
              <td>Not Serviced</td>
              <td>Aug 28, 2004</td>
              <td>Dianne Russell</td>
              <td>PB</td>
              <td>Whatsapp</td>
            </tr>

            <tr className='row-grey'>
              <td><input type="checkbox"></input></td>
              <td>16</td>
              <td>Nov 28, 2020</td>
              <td>Kathyrn murphy</td>
              <td>9873455678</td>
              <td>Ladakh</td>
              <td>Doctoral Program</td>
              <td>Not Serviced</td>
              <td>Sep 01, 2000</td>
              <td>Jane Cooper</td>
              <td>PB</td>
              <td>Applied Online</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default MainScreen
