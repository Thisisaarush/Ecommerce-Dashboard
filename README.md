# Ecommerce Dashboard

This is an Ecommerce Dashboard built with Next.js, React, and Tailwind CSS. It features product listing, filtering, and infinite scrolling.

## Features

- **Product Listing**: Displays a list of products with images, titles, categories, and prices.
- **Product Filtering**: Allows users to filter products by category and sort by price.
- **Infinite Scrolling**: Automatically loads more products as the user scrolls down the page.
- **Product Modal**: Displays detailed information about a product in a modal.

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
