# Next js

## Creating pages and using the app and pages directories

### `App Directory` 

For a route that has a named path, we can create a folder. For the contact page, we can create a folder called contact. Then in that folder, we can create the page.js file for the route. So you should have this `./app/contact/page.jsx` which will create a route for `/contact.`

### `Dynamic routes`

If your route path has a dynamic segment, we can define that as well. For our blog, the url would look like this `/blog/:title.` And our file structure will look similar: `./app/blog/[title]/page.js.` We can access the route param inside our page component.

### `Grouping`

You can group pages together without affecting the URL structure. You might want this to:

- not spam the url with extra segments
- opt into and out of certain layouts
- create multiple root layouts (one for the marketing pages, one for the dashboard, etc.)

You can do this with the `()` syntax in the file structure

### `Head component`

Our app needs a head component in the app directory. This will hold the meta and title tags for our application.

```bash
# // ./app/head.tsx
export default function Head() {
  return (
    <>
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
```

### `Layout` 

Layouts are components that wrap our pages. We can use them when we want to keep certain UI elements on page across routes. Things like a navigation bar, footer, layout, etc. We need to create a root layout. You must have a root layout when using the app directory.

```bash
# ./app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
```

It's required to have a root layout, but we can also have multiple nested layouts that render inside each other. You simply have to create a layout file in the route folder. By default, the layouts will nest.

### `Link Component`

In place of an anchor tag, we can use the Link component from next/link to handle click interactions that translate to page navigations. It's easier than ever to use.

```bash
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
```

### `Programatic usage`

If you need to navigate between pages programmatically instead of when a user clicks. First, you must understand that this only works in client components, we'll get there later. Next.js provides a hook we can use that creates a router object for that has helpful navigation methods on it.

```bash
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/blog")}>
      Blog
    </button>
  );
}
```
















#

### Using server and client components together








# 

### Fetching data from server and client compoents

#

### Configuration

#

### Styling


