# DataDashboard

This application displays different types of charts (Candlestick, Pie, Bar, and Line charts) using React and Chart.js. The data for the charts is fetched from an API, and each chart has been built using reusable components and the `react-chartjs-2` library.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Approach and Thought Process](#approach-and-thought-process)

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/chart-application.git
cd chart-application
```

### Step 2: Install Dependencies

Once inside the project folder, run the following command to install all the required dependencies:

```bash
npm install
```

or, if you're using yarn:

```bash
yarn install
```

### Step 3: Set Up the Backend API

Ensure you have a working API server running, which provides the chart data. 

The expected endpoints are:

- GET /api/candlestick-data/
- GET /api/pie-chart-data/
- GET /api/bar-chart-data/
- GET /api/line-chart-data/

These endpoints should return the data in JSON format, with labels and data points.

### Step 4: Configure the API URLs

If your API URL is different from http://localhost:8000, open each chart component (CandlestickChart.tsx, PieChart.tsx, etc.) and update the axios.get calls with the correct API endpoints.

### Step 5: Start the Application

To run the application locally, use the following command:

```bash
npm start
```

or, if you're using yarn:

```bash
yarn start
```

The application will be running at http://localhost:3000.

## Running the Application

Once the app is running, it will display four different chart components:

- Candlestick Chart: Displays candlestick financial data.
- Pie Chart: Shows proportional data using a pie chart.
- Bar Chart: Displays data as bars for comparison between categories.
- Line Chart: Plots data as a series of points connected by lines.

Each chart fetches data from its respective API and displays it dynamically.

## Libraries and Tools Used

### Frontend

React: Used for building the user interface.

TypeScript: Provides type safety and better tooling for React components.

Axios: A promise-based HTTP client for making API requests.

Chart.js: The core library for creating charts.

react-chartjs-2: React wrapper for Chart.js, making it easier to integrate with React components.

chartjs-chart-financial: Provides the Candlestick chart type, extending Chart.js.

### Backend

The application expects a backend API that serves JSON Data.

## Approach and Thought Process

### Goal

The goal of this project is to provide reusable chart components that fetch data dynamically from an API and render it using Chart.js. Each chart should be flexible enough to accommodate different types of data, while the implementation remains clean, maintainable, and easy to extend.

### Thought Process

Reusability: Each chart is encapsulated in its own React component. The same structure is used across all chart components (PieChart, BarChart, LineChart, CandlestickChart), which simplifies the application and makes it easy to add new chart types in the future.

Dynamic Data Fetching: The application uses Axios to fetch data from the backend API. This ensures that the charts are always up to date with the latest data. By making the API calls inside useEffect, we ensure that the data is fetched as soon as the component is mounted.

TypeScript for Safety: Using TypeScript ensures that the data being fetched matches the expected types. This prevents runtime errors and makes the code more predictable.

Responsive Design: The charts are designed to be responsive, adjusting their size based on the container dimensions, ensuring compatibility with different screen sizes.

### Possible Future Enhancements

Error Handling: More sophisticated error handling for failed API requests.
Custom Themes: Ability to customize the color scheme or styling of the charts dynamically.

Real-time Data Updates: Implement real-time data updates for certain chart types, such as the candlestick chart.

## Conclusion

This project demonstrates how to build a React application with dynamic charts using react-chartjs-2 and axios. The use of reusable components, dynamic API data fetching, and type safety with TypeScript makes the codebase easy to maintain and extend.