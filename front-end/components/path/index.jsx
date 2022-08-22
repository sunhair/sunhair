function PathProps({path,handleTurnBackSegment}) {

  
  return (
    <div className="path">
      {path.map((unitpath, index) => (
        <a
          key={index}
          className="unitpath-basic ms-1 me-1 title"
          onClick={index=>handleTurnBackSegment(index)}
        >
          {unitpath.namepath}
        </a>
      ))}
    </div>
  );
}

export default PathProps;
