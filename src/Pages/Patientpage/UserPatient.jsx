import React from 'react'
import './UserPatient.css'
import Leftbar from '../../components/Leftbar/Leftbar';
import Navbar from '../../components/Navbar/Navbar';
import Userfeedtop from './userfeedtop';
import Searchbar from '../../components/Searchbar/Searchbar';
import { Table } from '@mui/material';


export default function UserPatient() {
    return (
      <div className="userpatient">
        <div className='container'>
            <Navbar/>
            <div className='container1'>
                <Leftbar/>
                <div className='container2'>
                  <Userfeedtop/>
                  <div className='person'>
                    <h2>Patients</h2>
                    <div className='des'>Here is a list of all patients</div>
                  </div>
                  <br/>
                  <div className='searchbar'>
                    <Searchbar/>
                    <button>Add patient</button>
                  </div>
                  <div className='patientable'>
                    <Table className='pati-table'>
                      <thead>
                        <tr>
                          <th> <input type="checkbox"/> </th>
                          <th>Patients Name</th>
                          <th>Email Address</th>
                          <th>Department</th>
                          <th>Role</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>Lindsey Stroud</td>
                          <td>lindsey.stroud@gmail.com</td>
                          <td>Technology Department</td>
                          <td>Head of Technology</td>
                          <td className='buttons'>
                            <button><img src='./assets/edit.png'/></button>
                            <button><img src="./assets/bin.png"/></button>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>Lindsey Stroud</td>
                          <td>lindsey.stroud@gmail.com</td>
                          <td>Technology Department</td>
                          <td>Head of Technology</td>
                          <td className='buttons'>
                            <button><img src='./assets/edit.png'/></button>
                            <button><img src="./assets/bin.png"/></button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
            </div>
        </div>                  
      </div>
      
     
    )
  }