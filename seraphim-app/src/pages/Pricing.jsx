import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import Footer from  '../components/Footer';
import EnigmaticCello from '../resources/Home.png'
import PricingTable from '../components/Table';

const Pricing = () => {

  const table_data_daytime = {
    "Attendance Time (hours)": [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
    "Total Price": ["$300.00", "$410.00", "$520.00", "$630.00", "$740.00", "$850.00", "$960.00", "$1070.00", "$1180.00"]
  };

  const table_data_nighttime = {
    "Attendance Time (hours)": [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
    "Total Price": ["$330.00", "$460.00", "$590.00", "$720.00", "$850.00", "$980.00", "$1100.00"]
  };

  return (
    <section>
      <Navbar />
      <img src={EnigmaticCello} className="pricingPhoto" alt="(temp)"/>
      <div className="pageTitle">
        Pricing
      </div>
      <div className="pageDescription">
        Our standard rates are available in the tables below.
      </div>
      <div className="tables">
        <div className="price-table">
          <h3 className="tableTitle">Daytime Hire Rate</h3>
          <PricingTable table_data={table_data_daytime}></PricingTable>
        </div>
        <div className="price-table">
          <h3 className="tableTitle">Nighttime Hire Rate (6PM onwards)</h3>
          <PricingTable table_data={table_data_nighttime}></PricingTable>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Pricing;