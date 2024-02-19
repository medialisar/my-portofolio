import React from "react";
import "./style.css";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <div className="box">
          <p className="box-title">Welcome!</p>
          <Link className="button button--primary button--lg" to="docs/intro">
            Take a look to know me more ;)
          </Link>
        </div>
      </div>
    </section>
  );
}
