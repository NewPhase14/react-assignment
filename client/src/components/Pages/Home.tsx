import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { apiClient } from '../../apiClient.ts';
import { AxiosResponse } from 'axios';
import { Patients } from '../../Api.ts';

export default function Home() {
  useEffect(() => {
    apiClient.patients
      .patientsList()
      .then((result: AxiosResponse<Patients[]>) => {
        console.log(result.data);
      });
  }, []);

  return (
    <div>
      <h1 className="menu-title text-5xl m-5">The Hospital App</h1>
      <Link to={'/patients'} className="link-hover">
        See all patients
      </Link>
      <br></br>
      <Link to={'/diseases'} className="link-hover">
        See all diseases
      </Link>
      <br></br>
      <Link to={'/diagnoses'} className="link-hover">
        See all diagnoses
      </Link>
    </div>
  );
}
