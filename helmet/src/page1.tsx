import { Helmet } from "react-helmet-async";

export const Page1 = () => {
  const componentName = "Page1";
  return (
    <div>
      <Helmet>
        <title>{componentName}</title>
      </Helmet>
      <h1>Page1</h1>
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`page1`}>Page1</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};