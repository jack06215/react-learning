type IngredientProps = {
  amount: number;
  measurement: string;
  name: string;
};

type InstructionProps = {
  title: string;
  steps: Array<string>;
};

type IngredientListProps = {
  ingredients: Array<IngredientProps>;
};

type ReceiptProps = {
  name: string;
  ingredients: Array<IngredientProps>;
  steps: Array<string>;
};

type MenuProps = {
  recipes: Array<ReceiptProps>;
};

function Ingredient({ amount, measurement, name }: IngredientProps) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}

function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}

function Instructions({ title = "untitle", steps }: InstructionProps) {
  return (
    <section>
      <h2> {title} </h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
}

function Receipt({ name, ingredients, steps }: ReceiptProps) {
  return (
    <section>
      <h1>{name}</h1>
      <IngredientList ingredients={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

// Array<ReceiptProps>
export const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese.",
    ],
  },
];

export function Menu({ recipes }: MenuProps) {
  return (
    <article>
      <header>
        <h1>Delicious Receipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((props, i) => (
          <Receipt key={i} {...props} />
        ))}
      </div>
    </article>
  );
}
