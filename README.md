<h1 align="center">REST API Express</h1>
<p align="center"><img src="https://miro.medium.com/max/1400/0*RDbjFZxjwF_JQWz-.jpg" width="400px" alt="NodeJS.jpg" /></p>
<p align="center">
    <a href="https://en.wikipedia.org/wiki/Express.js" target="blank">More about Express</a>
</p>

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.13.3-blue.svg?style=rounded-square)](https://www.postgresql.org/)

## Flow Chart API (CRUD)

<div align="center">
    <table>
  <tr>
    <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291443/sejuta/sejuta_01_btt3la.png" width="400px" alt="Arkademylogo.svg" />
        <p align="center">Registrasi Admin</p>
    </th>
    <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291430/sejuta/sejuta_02_sn8u0v.png" width="400px" alt="Arkademylogo.svg" />
        <p align="center">Registrasi User</p>
    </th>
  </tr>
 <tr>
    <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291439/sejuta/sejuta_03_wnxw9p.png" width="400px" alt="Arkademylogo.svg" />
        <p align="center">Login (Authentication)</p>
    </th>
    <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291450/sejuta/sejuta_04_sfvmr5.png" width="400px" alt="Arkademylogo.svg" />
        <p align="center">Get All Data Users (Admin)</p>
    </th>
  </tr>
  <tr>
   <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291447/sejuta/sejuta_05_fvhx4v.png" width="400px" alt="Arkademylogo.svg" />
       <p align="center">Get Data User (Admin & User)</p>
    </th>
    <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291447/sejuta/sejuta_06_u88jb0.png" width="400px" alt="Arkademylogo.svg" />
        <p align="center">Update User (Admin)</p>
    </th>
  </tr>
  <tr>
   <th>
      <img src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1640291441/sejuta/sejuta_07_ogykor.png" width="400px" alt="Arkademylogo.svg" />
       <p align="center">Delete User (Admin)</p>
    </th>
  </tr>
</table>
  </div>

## Feature
- CRUD
- ORM Sequelize
- MVC Models
- Authentication and Authorization

## Installation Steps

1. Clone the repository

   ```bash
    https://github.com/wsaefulloh/sejuta-cita-API
    ```

2. Install dependencies

   ```bash
   yarn install
   ```

3. Add .env file at root folder project

   ```sh
   DB_USERS_PROD = your_user
   DB_HOST_PROD  = your_host
   DB_NAME_PROD  = your_db_name
   DB_PASS_PROD  = your_pass
   
   JWT_KEYS = your_jwt_keys
   ```

4. Run the app

   ```bash
   yarn start
   ```

5. You are all set!

   ```bash
   Backend running at: http://localhost:3000
   ```

## Credential
   ```sh
  username = admin_01
  password = admin1234
   ```

## End Point
You can see all the end point [here](https://documenter.getpostman.com/view/16508598/UVRDFkHU)


## License
© [Wahyu Saefulloh](https://github.com/wsaefulloh/)
