import Link from "next/Link";

function PathProps({ props }) {
  return (
    <div className="path">
      {props.map((unitpath, index) => (
        <Link key={index} href={unitpath.href}>
          <a className="unitpath-basic ms-1 me-1 title">{unitpath.namepath}</a>
        </Link>
      ))}
    </div>
  );
}

export default PathProps;
