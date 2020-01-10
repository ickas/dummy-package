## Bootstrap setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```sh
npx create-react-app <your-package>
cd <your-package>
npm start
```

Now that we give the first step just open http://localhost:3000 to see your app.

It's time to install other dependency. `@babel/cli` which can be used to compile files from the command line and `@babel/preset-react` to transpile ES6 to ES5.

```sh
npm install --save-dev @babel/cli @babel/preset-react
```

## Edit `package.json`

Before publishing our package we have some things to edit on `package.json`.

Rename your project

```json
"name": "@<username>/<your-package>"
```

Set private to _false_

```json
"private": false
```

Add the following script to the scripts section to convert all the components to ES5 and create a `dist` folder with them.

```json
"package": "rm -rf dist && mkdir dist &&  babel ./src/components -d dist --copy-files"
```

**Note**:
You can rename the `"package"` command.

Add `babel`

```json
"babel": {
  "presets": [
    "@babel/preset-react"
  ]
}
```

Finally, for we publish the package on GitHub just add

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com/"
}
```

You can see the full `package.json` file [here](https://github.com/henriquemacedo/dummy-package/blob/master/README.md).

## Create components

After the project setup and before we published the package we need to build some beautiful components. So, here we go!

Create a `components` directory inside the `src` folder and create our first `awesome-component.js`

```javascript
import React from "react";

const AwesomeComponent = props => {
  const { children } = props;
  return <div>{children}</div>;
};

export default AwesomeComponent;
```

## Publish

And last but not least, we just need to compile our package and publish.

```sh
npm run package
npm publish
```

And your package is live on your Github page at `https://github.com/<username>?tab=packages`

## Import components

Now that we have our awesome package published, we can import our components on other project.

1. Install your package
```sh
npm install --save @<username>/<your-package>
```

2. Import components

```javascript
import AwesomeComponent from "@<username>/<your-package>/dist/awesome-component";

<AwesomeComponent>
  Today's your lucky day!
</AwesomeComponent>
```

## Test package locally

One important thing is that we can test our package without publishing and for that, we've `pack` command. On root of the directory that contains the `package.json` file and after we run the `npm run package` to compile our package, just run

```sh
npm pack
```

This will create a gzip with the version specified in the `package.json`. Something like `<username>-<your-package>-0.1.0.tgz`

After that, you just need to run the `npm install` command on your other project to test it locally.

```sh
npm install --save ../path/to/your-package.tgz
```

## Extra steps
### Add style-components

We have a couple of ways to style our components, one of them is [styled-components](https://www.styled-components.com/). So, if you want to create a beautiful reusable components that you can use throughout your projects you can add styled-component to your package.

```sh
npm install --save styled-components
```

> styled-components utilises tagged template literals to style your components. It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

With styled-components, we can transform our old `AwesomeComponent` to a new, shiny and beautiful card.

```javascript
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 20px;

  h1 {
    margin: 0;
  }

  p {
    margin: 20px 0 0;
  }
`;

const AwesomeComponent = props => {
  const { title, description } = props;
  return (
    <Card>
      <h1>{title}</h1>
      <p>{description}</p>
    </Card>
  );
};

export default AwesomeComponent;
```

## Other available scripts

```sh
npm test
```

The page will reload if you make edits. You will also see any lint errors in the console.

```sh
npm run build
```

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.