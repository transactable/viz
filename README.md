# Fair Use User-Input Calculator

This is a user-input calculator designed to determine the fair use score based on a preconfigured model. The calculator is built using Next.js and React.js, providing an interactive and intuitive interface for users to input their preferences. This README.md file will provide an overview of the calculator, its features, and how to use it effectively.

## Introduction
The Fair Use User-Input Calculator allows users to determine a fair use score based on their preferences and input settings. The calculator utilizes a parameterized model that defines the fair use factors, weights, and input options. Users can interact with radio buttons and vertical sliders to provide their input, and the calculator calculates the fair use score based on the user's selections.

## Features
- Interactive user interface for easy input selection
- Parameterized model for flexibility and customization
- Automatic calculation of fair use score based on user input
- Multiple levels of weights to accommodate complex relationships between inputs

## Usage
1. **Installation**: Clone the repository and install the necessary dependencies using `npm install`.

2. **Starting the Calculator**: Run the application using `npm start`. The calculator will be accessible at `http://localhost:3000` in your browser.

3. **Input Selection**: Use the provided radio buttons and vertical sliders to input your preferences and selections. The calculator will dynamically update the fair use score based on your input.

4. **Viewing the Score**: Once you have made your selections, the fair use score will be displayed on the screen. This score represents the calculated fair use score based on your input settings.

## Model Configuration
The fair use model used in the calculator is parameterized and can be customized according to specific requirements. The model is defined using a TypeScript/JavaScript object that specifies the factors, weights, and input options.

The model object contains five top-level groups called "factors". Each factor has a weight assigned to it. Within each factor, there are different input options such as radio buttons and vertical sliders. Each input option has its own weight within the factor.

The model object is preconfigured and can be modified to suit your specific needs. You can adjust the factors, weights, and input options to match your desired fair use criteria.

## Calculating the Fair Use Score
The fair use score is calculated based on the user's input selections and the corresponding weights defined in the model. The calculator combines the user inputs and weights to determine the fair use score.

The calculation process involves scaling certain weights and inputs depending on other input settings. This allows for a complex relationship between the inputs and groups of inputs, enabling a more accurate fair use score calculation.

## Contributing
Contributions to the Fair Use User-Input Calculator are welcome. If you have any suggestions, bug reports, or feature requests, please submit them to the GitHub repository. We appreciate your feedback and contributions to improve the calculator.

## License
The Fair Use User-Input Calculator is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the calculator according to the terms of the license.


## Project Structure

The project follows the following directory structure:

```
root/
├── app/
│ └── viz/
│   ├── page.tsx
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








