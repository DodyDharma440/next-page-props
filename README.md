# next-page-props

Simple NPM package to get current page props from nested page component

## Installation

```
npm install @dodidharma/next-page-props

// or

yarn add @dodidharma/next-page-props
```

## Usage

### Global Usage

Import the `withPageProps` hoc in app and wrap the `App` component

```
import { AppProps } from "next"
import { withPageProps } from "@dodidharma/next-page-props";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps}>
}

export default withPageProps(App);
```

### Per Page Usage

Import the `withPageProps` hoc in app and wrap Page component

```
import { NextPage } from "next";
import { withPageProps } from "@dodidharma/next-page-props";

export type HomeProps = {
    hello: string;
}

const Home: NextPage<HomeProps> = ({ hello }) => {
    return (
        <div>Home Page</div>
    )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = () => {
    return {
        props: {
            hello: "world",
        }
    }
}

export default withPageProps(HomePage);
```

### Usage in Component

In the component import `usePageProps` hooks. Make sure this component is called in home page.

```
import { usePageProps } from "@dodidharma/next-page-props";
import { HomeProps } from "@/pages";

const Example = () => {
    const pageProps = usePageProps<HomeProps>();
    console.log(pageProps) // { hello: "world" }

    return (
        <div>Example</div>
    )
}

export default Example;
```
