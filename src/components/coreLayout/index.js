import React from "react";
import MainNav from "../../components/mainNav";
import SiteFooter from "../../components/siteFooter";
import { Link } from "gatsby";
import { container } from "./coreLayout.module.scss";

export default function CoreLayout({
  withSubtitle = false,
  withNav = true,
  children,
}) {
  return (
    <div className={container}>
      <h1>
        <Link to="/">Morningside Quaker Meeting</Link>
      </h1>
      {withNav ? <MainNav /> : null}
      {withSubtitle ? (
        <h2>
          Morningside Monthly Meeting
          <br />
          of the Religious Society of Friends
        </h2>
      ) : null}
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
