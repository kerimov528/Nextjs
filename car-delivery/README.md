# 🚗 **Front-end JS Engineer Test Assessment - Car Dealer App**

## 📋 **Overview**

This repository contains the implementation of the **Car Dealer App** using **Next.js**. The app allows users to filter cars based on vehicle type and model year, and view the results on a separate page.

## ✅ **Steps Completed**

### 1. **Create a Next.js Application**

I created a new Next.js application using the following command:

```bash
npx create-next-app@latest car-dealer-app
```

After the app was set up, I installed necessary dependencies such as Tailwind CSS for styling.

## 2. Create the Filter Page

### 🎨 Designing the Filter Page:
- The filter page is set as the home page of the app (`pages/index.js`).
- I used Tailwind CSS to style the page, ensuring a clean and responsive UI. I created input fields for vehicle make and model year selectors.

### Adding Vehicle Makes and Model Year Selectors:
- I fetched vehicle makes from the following API endpoint:

```bash
https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
```

## 3. Create the Result Page

### ⚙️ Implementing `generateStaticParams`:
- I defined the `generateStaticParams` function inside `pages/result/[makeId]/[year].js` to pre-render the result pages based on the available vehicle makes and model years.
- The paths are dynamically generated using data from the vehicle makes and model years.

### 🛠 Fetching Vehicle Data:
- On the result page, I used Next.js dynamic routing to access the vehicle `makeId` and `year` from the URL parameters.
- I fetched the corresponding vehicle models from the following endpoint:

```bash
https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
```

## 4. Implement Suspense Component

- I implemented React’s Suspense component to handle loading states for the vehicle models on the result page.
- Suspense was used to delay the rendering of the results until the data is successfully fetched.

## 5. Implement UI with Tailwind CSS

- I styled all pages and components using Tailwind CSS.
- I made sure the UI was responsive across devices and followed accessibility best practices (e.g., aria labels for dropdowns, focus management for accessibility).


## 6. Add Configuration and Documentation

### Environment Variables:

### Setup ESLint and Prettier:
- I added ESLint and Prettier to maintain code quality and consistency.
- Configured `.eslintrc.js` and `.prettierrc` files to follow best practices.

### Creating the README File:
- I wrote this `README.md` file to provide a comprehensive overview of the project and how to set it up and run it locally.

## Installation

### Clone the repository:
```bash
git clone https://github.com/kerimov528/car-delivery-app

cd car-dealer-app

npm install

npm run dev
```
Open http://localhost:3000 in your browser to see the application in action.

## Technologies Used

- Next.js for building the React app and server-side rendering.
- Tailwind CSS for styling.
- React Suspense for handling data fetching and loading states.

## API Documentation

- [VPIC API Documentation](https://vpic.nhtsa.dot.gov/api/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Deployment

This application can be deployed using any preferred platform like Vercel, Netlify, or AWS.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements. Ensure to follow proper code style and include tests where applicable.

Thank you for reviewing my Car Dealer App project!


