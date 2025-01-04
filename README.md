# RRMS Website

## About the project
This project aims to provide information and resources for individuals with 
relapsing-remitting multiple sclerosis (RRMS) and their families. 
It includes an interactive map, educational content, and tools to help manage the disease.

## Table of contents:
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Setup](#setup)

## Technologies
- React v18.3.1
- Docker v27.1.1

## Features
- Interactive map with data visualization
- Educational resources about RRMS

## Installation
The installation takes place within the system console.
1. Clone repository: ```git clone https://github.com/wl-lew/rrms-website.git```
2. Install dependencies: ```npm install```

## Setup
- Before you begin, download Docker from www.docker.com and open that app.
### I. Environment variables
- To add environment variables create a ```.env``` file.
- Examples of the environment variables used can be found in the file ```.env.example```.
### II. Main app
- In the ```.env``` file, create an environment variable ```PORT``` with the local port number.
### III. Mapbox token
- To get the token go to www.mapbox.com and create an account.
- After navigating to the Mapbox website, follow the on-screen instructions to properly configure your API token and gain access to the required features.
- In the ```.env``` file, create ```REACT_APP_MAP_API_KEY``` with the Mapbox key.
### IV. Docker
- To start server, type the command ```docker-compose up``` in the terminal.