# User-Input Fair-Use Calculator

This project contains a user-input fair-use calculator implemented in the Next.js application. The calculator is located in the root/app/viz page directory and utilizes a component called VertSlider.

The original nav bar selector 'Visualizer' has been refactored and added as 'Viz' additional nav bar page selector.

'Viz' is the new, refactored update.

## Project Structure

The project follows the following directory structure:

```
root/
├── app/
│ └── viz/
│   ├── page.tsx
│   ├── src/
|   |   └── sliders.ts
│   └── components
|       └── VertSlider.tsx
|
├── functions/
|       └── classnames.tsx
|
├── models/
|       ├── Visualizer.tsx
|       └── Viz.tsx
|
├── styles/
|       ├── global.css
|       ├── Slider.modulecss
|       ├── VertSlider.module.css
|       └── FairUse.module.css
```

- `page.tsx` in the `app/viz/` directory is the main page that displays the fair-use calculator and handles user inputs.
- `VertSlider.tsx` in the `app/viz/` directory is a component used by the fair-use calculator to render vertical sliders and calculate scores.
- `Viz.ts` in the `model/` directory is a parameterized file that defines the layout and logic for the selectable inputs in the fair-use calculator.

## Fair-Use Calculator Layout

The fair-use calculator allows users to input their selections through a set of selectable inputs, which are grouped into a CSS-styled card with a title. Each selectable input can be either a group of checkboxes or a single vertical slider.

- Checkboxes: Users can select multiple checkboxes within a group. Each checkbox has an associated score weighting.
- Vertical Slider: Users can slide the vertical slider to select a value within the specified range. Each slider also has a score weighting.

The layout and grouping of the selectable inputs are defined in the `Viz.ts` model file, allowing for flexibility and customization.

## Calculation Logic

The fair-use calculator calculates a score ranging from 0 to 100 based on the user's selections. When all checkboxes or vertical sliders are selected or slid to their maximum position, the calculator calculates the cumulative score by considering the score weightings associated with each selected input.

The logic for score calculation and user interaction is implemented in the `VertSlider` component. The component handles user input, updates the selected values, and calculates the cumulative score based on the selected inputs.

## Usage

To use the fair-use calculator, navigate to the `app/viz/` page in the Next.js application. Interact with the checkboxes and vertical sliders to make your selections. The cumulative score will be displayed based on your inputs.

Feel free to customize the selectable inputs, layout, and logic by modifying the `Viz.ts` model file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






