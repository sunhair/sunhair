function PathProps({ path }) {


  function turnBackSegment(index) {
    // setCurrPath((curPath) =>
    //   [...curPath.slice(0,index+1)]
    // );
    // setCurrPath([{href:"1",namepath:"b"},{href:"2",namepath:"b"}]);    
  }

  return (
    <div className="path">
      {path.map((unitpath, index) => (
        <a
          key={index}
          className="unitpath-basic ms-1 me-1 title"
          onClick={()=>turnBackSegment(index)}
        >
          {unitpath.namepath}
        </a>
      ))}
    </div>
  );
}

export default PathProps;
