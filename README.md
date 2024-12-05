# Ecommerce Dashboard

This is an Ecommerce Dashboard built with Next.js, React, and Tailwind CSS. It features product listing, filtering, and infinite scrolling.

## Features

- **Product Listing**: Displays a list of products with images, titles, categories, and prices.
- **Product Filtering**: Allows users to filter products by category and sort by price.
- **Infinite Scrolling**: Automatically loads more products as the user scrolls down the page.
- **Product Modal**: Displays detailed information about a product in a modal.

## Design Decisions, Patterns, and Optimizations

- **Next.js**: Chosen for its server-side rendering capabilities and ease of integration with React.
- **React**: Used for building reusable UI components.
- **Tailwind CSS**: Utilized for rapid and consistent styling.
- **Intersection Observer**: Implemented for infinite scrolling to improve performance by loading products as needed.
- **Axios**: Used for making API requests due to its simplicity and ease of use.
- **State Management**: Managed using React's `useState` and `useEffect` hooks for simplicity and ease of understanding.

## Known Limitations and Future Enhancements

- **Mock API**: Currently using a mock API which returns the same data for all requests, so filtering and sorting do not work as expected.
- **Error Handling**: Basic error handling is implemented, but it can be improved to provide better user feedback.
- **Testing**: Unit and integration tests can be added to ensure the reliability of the application.
- **Performance Optimization**: Further optimizations can be made to improve the performance, such as memoizing components and optimizing API requests.
- **Accessibility**: Enhancements can be made to improve the accessibility of the application.

## Project Structure

## Components

- **FilterBar**: A component for filtering products by category and sorting by price. ([`FilterBar`](src/components/FilterBar.tsx))
- **ProductCard**: A component for displaying individual product information. ([`ProductCard`](src/components/ProductCard.tsx))
- **ProductModal**: A component for displaying detailed product information in a modal. ([`ProductModal`](src/components/ProductModal.tsx))

## Types

- **Product**: Interface representing a product. ([`Product`](src/types.ts))
- **Filters**: Interface representing the filters applied to the product list. ([`Filters`](src/types.ts))

## API

- **fetchProducts**: Function to fetch products from the API with pagination and filters. ([`fetchProducts`](src/services/api.ts))

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository

2. Install the dependencies:

   `npm install`

3. Start the development server:

   `npm run dev`
